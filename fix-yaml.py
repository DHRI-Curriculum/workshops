#!/usr/bin/env python3
"""
Fix YAML frontmatter format in workshop files.

Converts from:
    - Some Name:
        description: ...
        link: ...

To:
    - name: Some Name
      description: ...
      link: ...
"""

import re
import os
import glob

def fix_yaml_format(content):
    """Fix the key-as-name YAML format in frontmatter."""

    # Find frontmatter boundaries
    parts = content.split('---', 2)
    if len(parts) < 3:
        return content

    frontmatter = parts[1]
    body = parts[2]

    # Pattern to match array items where the key is the name
    # Matches: "    - Some Name:\n        property: value"
    # The key is: starts after "- ", ends with ":", followed by newline and indented properties

    # This regex finds list items where the item is a single-key object
    # Pattern: whitespace + "- " + key ending with ":" + newline + more indented content

    lines = frontmatter.split('\n')
    result_lines = []
    i = 0

    while i < len(lines):
        line = lines[i]

        # Check if this is a list item with key-as-name pattern
        # Pattern: "    - SomeName:" where SomeName contains spaces or letters
        match = re.match(r'^(\s+)-\s+([^:]+):\s*$', line)

        if match:
            indent = match.group(1)
            key_name = match.group(2).strip()

            # Check if next line is indented more (a property of this object)
            if i + 1 < len(lines):
                next_line = lines[i + 1]
                # Check if next line has properties like "description:" or "link:"
                prop_match = re.match(r'^(\s+)(description|link|required|recommended):', next_line)

                if prop_match:
                    next_indent = prop_match.group(1)
                    # This is the key-as-name pattern - convert it
                    # New format: "    - name: SomeName"
                    result_lines.append(f"{indent}- name: {key_name}")

                    # Now adjust following property lines to use correct indentation
                    # They should be at same level as "name:"
                    base_indent = indent + "  "  # 2 more spaces than the "-"

                    i += 1
                    while i < len(lines):
                        prop_line = lines[i]
                        # Check if still in this object (indented more than list item)
                        if prop_line.strip() == '' or (prop_line.startswith(next_indent) and not prop_line.startswith(indent + "- ")):
                            # This line belongs to current object
                            # Re-indent it
                            stripped = prop_line.strip()
                            if stripped:
                                result_lines.append(f"{base_indent}{stripped}")
                            else:
                                result_lines.append('')
                            i += 1
                        else:
                            # New list item or different section
                            break
                    continue

        result_lines.append(line)
        i += 1

    return '---' + '\n'.join(result_lines) + '---' + body


def process_file(filepath):
    """Process a single markdown file."""
    print(f"Processing: {filepath}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    fixed_content = fix_yaml_format(content)

    if fixed_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"  Fixed: {filepath}")
        return True
    else:
        print(f"  No changes: {filepath}")
        return False


def main():
    """Process all workshop markdown files."""
    workshop_dir = os.path.dirname(os.path.abspath(__file__))
    md_files = glob.glob(os.path.join(workshop_dir, '*.md'))

    # Skip README and template
    skip_files = ['README.md']

    fixed_count = 0
    for filepath in sorted(md_files):
        filename = os.path.basename(filepath)
        if filename in skip_files:
            continue

        if process_file(filepath):
            fixed_count += 1

    print(f"\nTotal files fixed: {fixed_count}")


if __name__ == '__main__':
    main()
