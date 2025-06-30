import { visit } from 'unist-util-visit';

function extendClassName(existingClassName: string[] | string, newClass: string): string[] {
  if (Array.isArray(existingClassName)) {
    return [...existingClassName, newClass];
  } else if (typeof existingClassName === 'string') {
    return [existingClassName, newClass];
  } else {
    return [newClass];
  }
}

export function rehypeMarkdownStyling() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      node.properties = node.properties || {};
      if (node.tagName === 'p') {
        node.properties.className = extendClassName(node.properties.className, 'pb-5');
      }
    });
  };
}
