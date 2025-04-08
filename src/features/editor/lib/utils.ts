export function tidyHTML(htmlString: string): string {
  // Create a document parser
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, 'text/html')

  /**
   * Format a DOM node with proper indentation
   * @param node - The DOM node to format
   * @param level - The current indentation level
   * @returns Formatted HTML string for this node and its children
   */
  function formatNode(node: Node, level: number): string {
    // Skip empty text nodes and comments
    if (node.nodeType === Node.TEXT_NODE && !node.nodeValue?.trim()) return ''
    if (node.nodeType === Node.COMMENT_NODE) return ''

    const indent = '  '.repeat(level)

    // Text node
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
      return indent + node.nodeValue.trim() + '\n'
    }

    // If it's an element node
    let result = ''

    // Element node
    if (node instanceof Element) {
      // Skip style and script content indentation but keep the tags
      const skipContentFormat = ['STYLE', 'SCRIPT'].includes(node.nodeName)

      // Opening tag
      result += `${indent}<${node.nodeName.toLowerCase()}`

      // Add attributes
      for (const attr of Array.from(node.attributes)) {
        result += ` ${attr.name}="${attr.value}"`
      }

      // Self-closing tags
      if (node.childNodes.length === 0 && ['br', 'hr', 'img', 'input', 'link', 'meta'].includes(node.nodeName.toLowerCase())) {
        result += ' />\n'
        return result
      }
      else {
        result += '>\n'
      }

      // Process child nodes
      if (skipContentFormat && node?.textContent?.trim()) {
        // For script and style, preserve content without indentation
        result += indent + '  ' + node.textContent.trim() + '\n'
      }
      else {
        // Process regular child nodes
        for (const childNode of Array.from(node.childNodes)) {
          result += formatNode(childNode, level + 1)
        }
      }

      // Closing tag
      result += `${indent}</${node.nodeName.toLowerCase()}>\n`
    }

    return result
  }

  // Start from the HTML element (skip the auto-added html, head, body tags if they weren't in the original)
  let result = ''
  const originalElements = htmlString.trim().startsWith('<!DOCTYPE')
    || htmlString.trim().startsWith('<html')
    ? [doc.documentElement]
    : doc.body.childNodes

  for (const element of Array.from(originalElements)) {
    result += formatNode(element, 0)
  }

  return result.trim()
}
