/**
 * Nord Light — a custom light variant of the Nord Shiki theme.
 *
 * Based on the official Nord color palette with colors darkened for
 * good contrast on Snow Storm (#eceff4) backgrounds.
 *
 * @see https://www.nordtheme.com/docs/colors-and-palettes
 */
const nordLight = {
  name: 'nord-light',
  displayName: 'Nord Light',
  type: 'light' as const,
  semanticHighlighting: true,
  colors: {
    'editor.background': '#eceff4',
    'editor.foreground': '#2e3440',
    'editor.lineHighlightBackground': '#e5e9f0',
    'editor.selectionBackground': '#d8dee9cc',
    'editor.inactiveSelectionBackground': '#d8dee9aa',
    'editor.findMatchBackground': '#5e81ac44',
    'editor.findMatchHighlightBackground': '#5e81ac22',
    'editor.findRangeHighlightBackground': '#5e81ac22',
    'editor.wordHighlightBackground': '#5e81ac33',
    'editor.wordHighlightStrongBackground': '#5e81ac55',
    'editorBracketHighlight.foreground1': '#1b7e7c',
    'editorBracketHighlight.foreground2': '#2e7e91',
    'editorBracketHighlight.foreground3': '#5e81ac',
    'editorBracketHighlight.foreground4': '#4e6e8e',
    'editorBracketHighlight.foreground5': '#1b7e7c',
    'editorBracketHighlight.foreground6': '#2e7e91',
    'editorBracketHighlight.unexpectedBracket.foreground': '#a3434c',
    'editorBracketMatch.background': '#eceff400',
    'editorBracketMatch.border': '#2e7e91',
    'editorCursor.foreground': '#2e3440',
    'editorError.foreground': '#a3434c',
    'editorGutter.addedBackground': '#6d8b55',
    'editorGutter.background': '#eceff4',
    'editorGutter.deletedBackground': '#a3434c',
    'editorGutter.modifiedBackground': '#b5921a',
    'editorIndentGuide.activeBackground': '#d8dee9',
    'editorIndentGuide.background': '#d8dee9b3',
    'editorLineNumber.activeForeground': '#2e3440',
    'editorLineNumber.foreground': '#8a91a0',
    'editorLink.activeForeground': '#2e7e91',
    'editorOverviewRuler.addedForeground': '#6d8b55',
    'editorOverviewRuler.border': '#d8dee9',
    'editorOverviewRuler.deletedForeground': '#a3434c',
    'editorOverviewRuler.errorForeground': '#a3434c',
    'editorOverviewRuler.modifiedForeground': '#b5921a',
    'editorOverviewRuler.warningForeground': '#b5921a',
    'editorWarning.foreground': '#b5921a',
    'editorWhitespace.foreground': '#d8dee9b3',
    'editorWidget.background': '#eceff4',
    'editorWidget.border': '#d8dee9',
    'focusBorder': '#d8dee9',
    'foreground': '#2e3440',
  },
  tokenColors: [
    // Base settings
    {
      settings: {
        background: '#eceff4',
        foreground: '#2e3440',
      },
    },
    // Emphasis & strong
    {
      scope: 'emphasis',
      settings: { fontStyle: 'italic' },
    },
    {
      scope: 'strong',
      settings: { fontStyle: 'bold' },
    },
    // Comments
    {
      scope: 'comment',
      settings: { foreground: '#8a91a0' },
    },
    // Constants
    {
      scope: 'constant.character',
      settings: { foreground: '#b5921a' },
    },
    {
      scope: 'constant.character.escape',
      settings: { foreground: '#b5921a' },
    },
    {
      scope: 'constant.language',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'constant.numeric',
      settings: { foreground: '#8c5e83' },
    },
    {
      scope: 'constant.regexp',
      settings: { foreground: '#b5921a' },
    },
    // Entities
    {
      scope: ['entity.name.class', 'entity.name.type.class'],
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'entity.name.function',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: 'entity.name.tag',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'entity.other.inherited-class',
      settings: { fontStyle: 'bold', foreground: '#1b7e7c' },
    },
    // Invalid
    {
      scope: 'invalid.deprecated',
      settings: { background: '#b5921a', foreground: '#2e3440' },
    },
    {
      scope: 'invalid.illegal',
      settings: { background: '#a3434c', foreground: '#eceff4' },
    },
    // Keywords
    {
      scope: 'keyword',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'keyword.operator',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'keyword.other.new',
      settings: { foreground: '#5e81ac' },
    },
    // Markup
    {
      scope: 'markup.bold',
      settings: { fontStyle: 'bold' },
    },
    {
      scope: 'markup.changed',
      settings: { foreground: '#b5921a' },
    },
    {
      scope: 'markup.deleted',
      settings: { foreground: '#a3434c' },
    },
    {
      scope: 'markup.inserted',
      settings: { foreground: '#6d8b55' },
    },
    // Preprocessor
    {
      scope: 'meta.preprocessor',
      settings: { foreground: '#4e6e8e' },
    },
    // Punctuation
    {
      scope: 'punctuation',
      settings: { foreground: '#434c5e' },
    },
    {
      scope: [
        'punctuation.definition.method-parameters',
        'punctuation.definition.function-parameters',
        'punctuation.definition.parameters',
      ],
      settings: { foreground: '#434c5e' },
    },
    {
      scope: 'punctuation.definition.tag',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: [
        'punctuation.definition.comment',
        'punctuation.end.definition.comment',
        'punctuation.start.definition.comment',
      ],
      settings: { foreground: '#8a91a0' },
    },
    {
      scope: 'punctuation.section',
      settings: { foreground: '#434c5e' },
    },
    {
      scope: ['punctuation.section.embedded.begin', 'punctuation.section.embedded.end'],
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'punctuation.terminator',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'punctuation.definition.variable',
      settings: { foreground: '#5e81ac' },
    },
    // Storage
    {
      scope: 'storage',
      settings: { foreground: '#5e81ac' },
    },
    // Strings
    {
      scope: 'string',
      settings: { foreground: '#6d8b55' },
    },
    {
      scope: 'string.regexp',
      settings: { foreground: '#b5921a' },
    },
    // Support
    {
      scope: 'support.class',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'support.constant',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'support.function',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: 'support.function.construct',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'support.type',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'support.type.exception',
      settings: { foreground: '#1b7e7c' },
    },
    // Tokens
    {
      scope: 'token.debug-token',
      settings: { foreground: '#8c5e83' },
    },
    {
      scope: 'token.error-token',
      settings: { foreground: '#a3434c' },
    },
    {
      scope: 'token.info-token',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: 'token.warn-token',
      settings: { foreground: '#b5921a' },
    },
    // Variables
    {
      scope: 'variable.other',
      settings: { foreground: '#2e3440' },
    },
    {
      scope: 'variable.language',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'variable.parameter',
      settings: { foreground: '#2e3440' },
    },

    // ============================================
    // Language-specific scopes
    // ============================================

    // C/C++
    {
      scope: 'punctuation.separator.pointer-access.c',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: ['source.c meta.preprocessor.include', 'source.c string.quoted.other.lt-gt.include'],
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: [
        'source.cpp keyword.control.directive.conditional',
        'source.cpp punctuation.definition.directive',
        'source.c keyword.control.directive.conditional',
        'source.c punctuation.definition.directive',
      ],
      settings: { fontStyle: 'bold', foreground: '#4e6e8e' },
    },

    // CSS
    {
      scope: 'source.css constant.other.color.rgb-value',
      settings: { foreground: '#8c5e83' },
    },
    {
      scope: 'source.css meta.property-value',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: [
        'source.css keyword.control.at-rule.media',
        'source.css keyword.control.at-rule.media punctuation.definition.keyword',
      ],
      settings: { foreground: '#a5613f' },
    },
    {
      scope: 'source.css punctuation.definition.keyword',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'source.css support.type.property-name',
      settings: { foreground: '#2e3440' },
    },

    // Diff
    {
      scope: 'source.diff meta.diff.range.context',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.diff meta.diff.header.from-file',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.diff punctuation.definition.from-file',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.diff punctuation.definition.range',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.diff punctuation.definition.separator',
      settings: { foreground: '#5e81ac' },
    },

    // Elixir
    {
      scope: 'entity.name.type.module.elixir',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'variable.other.readwrite.module.elixir',
      settings: { fontStyle: 'bold', foreground: '#2e3440' },
    },
    {
      scope: 'constant.other.symbol.elixir',
      settings: { fontStyle: 'bold', foreground: '#2e3440' },
    },
    {
      scope: 'variable.other.constant.elixir',
      settings: { foreground: '#1b7e7c' },
    },

    // Go
    {
      scope: 'source.go constant.other.placeholder.go',
      settings: { foreground: '#b5921a' },
    },

    // Java
    {
      scope: 'source.java comment.block.documentation.javadoc punctuation.definition.entity.html',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'source.java constant.other',
      settings: { foreground: '#2e3440' },
    },
    {
      scope: 'source.java keyword.other.documentation',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.java keyword.other.documentation.author.javadoc',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: [
        'source.java keyword.other.documentation.directive',
        'source.java keyword.other.documentation.custom',
      ],
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.java keyword.other.documentation.see.javadoc',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.java meta.method-call meta.method',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: [
        'source.java meta.tag.template.link.javadoc',
        'source.java string.other.link.title.javadoc',
      ],
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.java meta.tag.template.value.javadoc',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: 'source.java punctuation.definition.keyword.javadoc',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: [
        'source.java punctuation.definition.tag.begin.javadoc',
        'source.java punctuation.definition.tag.end.javadoc',
      ],
      settings: { foreground: '#8a91a0' },
    },
    {
      scope: 'source.java storage.modifier.import',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.java storage.modifier.package',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.java storage.type',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.java storage.type.annotation',
      settings: { foreground: '#a5613f' },
    },
    {
      scope: 'source.java storage.type.generic',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.java storage.type.primitive',
      settings: { foreground: '#5e81ac' },
    },

    // JavaScript
    {
      scope: [
        'source.js punctuation.decorator',
        'source.js meta.decorator variable.other.readwrite',
        'source.js meta.decorator entity.name.function',
      ],
      settings: { foreground: '#a5613f' },
    },
    {
      scope: 'source.js meta.object-literal.key',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: 'source.js storage.type.class.jsdoc',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: [
        'source.js string.quoted.template punctuation.quasi.element.begin',
        'source.js string.quoted.template punctuation.quasi.element.end',
        'source.js string.template punctuation.definition.template-expression',
      ],
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'source.js string.quoted.template meta.method-call.with-arguments',
      settings: { foreground: '#434c5e' },
    },
    {
      scope: [
        'source.js string.template meta.template.expression support.variable.property',
        'source.js string.template meta.template.expression variable.other.object',
      ],
      settings: { foreground: '#2e3440' },
    },
    {
      scope: 'source.js support.type.primitive',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'source.js variable.other.object',
      settings: { foreground: '#2e3440' },
    },
    {
      scope: 'source.js variable.other.readwrite.alias',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: [
        'source.js meta.embedded.line meta.brace.square',
        'source.js meta.embedded.line meta.brace.round',
        'source.js string.quoted.template meta.brace.square',
        'source.js string.quoted.template meta.brace.round',
      ],
      settings: { foreground: '#434c5e' },
    },

    // HTML
    {
      scope: 'text.html.basic constant.character.entity.html',
      settings: { foreground: '#b5921a' },
    },
    {
      scope: 'text.html.basic constant.other.inline-data',
      settings: { fontStyle: 'italic', foreground: '#a5613f' },
    },
    {
      scope: 'text.html.basic meta.tag.sgml.doctype',
      settings: { foreground: '#4e6e8e' },
    },
    {
      scope: 'text.html.basic punctuation.definition.entity',
      settings: { foreground: '#5e81ac' },
    },

    // INI / Properties
    {
      scope: 'source.properties entity.name.section.group-title.ini',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: 'source.properties punctuation.separator.key-value.ini',
      settings: { foreground: '#5e81ac' },
    },

    // Markdown
    {
      scope: [
        'text.html.markdown markup.fenced_code.block',
        'text.html.markdown markup.fenced_code.block punctuation.definition',
      ],
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'markup.heading',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: [
        'text.html.markdown markup.inline.raw',
        'text.html.markdown markup.inline.raw punctuation.definition.raw',
      ],
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'text.html.markdown markup.italic',
      settings: { fontStyle: 'italic' },
    },
    {
      scope: 'text.html.markdown markup.underline.link',
      settings: { fontStyle: 'underline' },
    },
    {
      scope: 'text.html.markdown beginning.punctuation.definition.list',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'text.html.markdown beginning.punctuation.definition.quote',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'text.html.markdown markup.quote',
      settings: { foreground: '#8a91a0' },
    },
    {
      scope: 'text.html.markdown constant.character.math.tex',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: [
        'text.html.markdown punctuation.definition.math.begin',
        'text.html.markdown punctuation.definition.math.end',
      ],
      settings: { foreground: '#4e6e8e' },
    },
    {
      scope: 'text.html.markdown punctuation.definition.function.math.tex',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: 'text.html.markdown punctuation.math.operator.latex',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'text.html.markdown punctuation.definition.heading',
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: [
        'text.html.markdown punctuation.definition.constant',
        'text.html.markdown punctuation.definition.string',
      ],
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: [
        'text.html.markdown constant.other.reference.link',
        'text.html.markdown string.other.link.description',
        'text.html.markdown string.other.link.title',
      ],
      settings: { foreground: '#2e7e91' },
    },

    // Perl
    {
      scope: 'source.perl punctuation.definition.variable',
      settings: { foreground: '#2e3440' },
    },

    // PHP
    {
      scope: ['source.php meta.function-call', 'source.php meta.function-call.object'],
      settings: { foreground: '#2e7e91' },
    },

    // Python
    {
      scope: [
        'source.python entity.name.function.decorator',
        'source.python meta.function.decorator support.type',
      ],
      settings: { foreground: '#a5613f' },
    },
    {
      scope: 'source.python meta.function-call.generic',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: 'source.python support.type',
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: ['source.python variable.parameter.function.language'],
      settings: { foreground: '#2e3440' },
    },
    {
      scope: ['source.python meta.function.parameters variable.parameter.function.language.special.self'],
      settings: { foreground: '#5e81ac' },
    },

    // Rust
    {
      scope: 'source.rust entity.name.type',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'source.rust meta.macro entity.name.function',
      settings: { fontStyle: 'bold', foreground: '#2e7e91' },
    },
    {
      scope: [
        'source.rust meta.attribute',
        'source.rust meta.attribute punctuation',
        'source.rust meta.attribute keyword.operator',
      ],
      settings: { foreground: '#4e6e8e' },
    },
    {
      scope: 'source.rust entity.name.type.trait',
      settings: { fontStyle: 'bold' },
    },
    {
      scope: 'source.rust punctuation.definition.interpolation',
      settings: { foreground: '#b5921a' },
    },

    // SCSS
    {
      scope: [
        'source.css.scss punctuation.definition.interpolation.begin.bracket.curly',
        'source.css.scss punctuation.definition.interpolation.end.bracket.curly',
      ],
      settings: { foreground: '#5e81ac' },
    },
    {
      scope: 'source.css.scss variable.interpolation',
      settings: { fontStyle: 'italic', foreground: '#2e3440' },
    },

    // TypeScript / TSX
    {
      scope: [
        'source.ts punctuation.decorator',
        'source.ts meta.decorator variable.other.readwrite',
        'source.ts meta.decorator entity.name.function',
        'source.tsx punctuation.decorator',
        'source.tsx meta.decorator variable.other.readwrite',
        'source.tsx meta.decorator entity.name.function',
      ],
      settings: { foreground: '#a5613f' },
    },
    {
      scope: ['source.ts meta.object-literal.key', 'source.tsx meta.object-literal.key'],
      settings: { foreground: '#2e3440' },
    },
    {
      scope: [
        'source.ts meta.object-literal.key entity.name.function',
        'source.tsx meta.object-literal.key entity.name.function',
      ],
      settings: { foreground: '#2e7e91' },
    },
    {
      scope: [
        'source.ts support.class',
        'source.ts support.type',
        'source.ts entity.name.type',
        'source.ts entity.name.class',
        'source.tsx support.class',
        'source.tsx support.type',
        'source.tsx entity.name.type',
        'source.tsx entity.name.class',
      ],
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: [
        'source.ts support.constant.math',
        'source.ts support.constant.dom',
        'source.ts support.constant.json',
        'source.tsx support.constant.math',
        'source.tsx support.constant.dom',
        'source.tsx support.constant.json',
      ],
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: ['source.ts support.variable', 'source.tsx support.variable'],
      settings: { foreground: '#2e3440' },
    },
    {
      scope: [
        'source.ts meta.embedded.line meta.brace.square',
        'source.ts meta.embedded.line meta.brace.round',
        'source.tsx meta.embedded.line meta.brace.square',
        'source.tsx meta.embedded.line meta.brace.round',
      ],
      settings: { foreground: '#434c5e' },
    },

    // XML
    {
      scope: 'text.xml entity.name.tag.namespace',
      settings: { foreground: '#1b7e7c' },
    },
    {
      scope: 'text.xml keyword.other.doctype',
      settings: { foreground: '#4e6e8e' },
    },
    {
      scope: 'text.xml meta.tag.preprocessor entity.name.tag',
      settings: { foreground: '#4e6e8e' },
    },
    {
      scope: [
        'text.xml string.unquoted.cdata',
        'text.xml string.unquoted.cdata punctuation.definition.string',
      ],
      settings: { fontStyle: 'italic', foreground: '#a5613f' },
    },

    // YAML
    {
      scope: 'source.yaml entity.name.tag',
      settings: { foreground: '#1b7e7c' },
    },
  ],
} as const

export default nordLight
