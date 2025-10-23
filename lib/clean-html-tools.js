'use babel';

export default {
  activate() {
    atom.commands.add('atom-text-editor', {
      'clean-html-tools:remove-tags': () => this.removeTags(),
      'clean-html-tools:remove-id-from-headings': () => this.removeIdFromHeadings()
    });
  },

  removeTags() {
    const editor = atom.workspace.getActiveTextEditor();
    if (!editor) return;

    const selection = editor.getSelectedText();
    if (!selection) return;

    // Elimina todas las etiquetas HTML
    const cleaned = selection.replace(/<[^>]+>/g, '');
    editor.insertText(cleaned);
  },

  removeIdFromHeadings() {
    const editor = atom.workspace.getActiveTextEditor();
    if (!editor) return;

    const selection = editor.getSelectedText();
    if (!selection) return;

    // Elimina los atributos id="..." en etiquetas h1–h6
    const cleaned = selection.replace(/<(h[1-6])([^>]*?)\sid="[^"]*"([^>]*)>/gi, '<$1$2$3>');
    editor.insertText(cleaned);
  }
};
