```
  // |--------------------------|
  // |        Navigation        |
  // |--------------------------|

  // |-----------------------------|
  // |        ⌘ + direction        |
  // |-----------------------------|
  // Move to the far end in each direction

  //   ⌘ Up
  // --------
  // Move to the Top of the document

  //   ⌘ Down
  // ----------
  // Move to the Bottom of the document

  //   ⌘ Left
  // ----------
  // Move Left to the Start of the Line

  //   ⌘ Right
  // -----------
  // Move Right to the End of the Line

  // ⇧ to select with all

  //   ⌘ Backspace
  // ---------------
  // Delete Left to the Start of the Line

  //   ⌘ Delete
  // ------------
  // Delete Right to the End of the Line

  // |-----------------------------|
  // |        ⌥ + direction        |
  // |-----------------------------|
  // Move by whitespace

  //   ⌥ Up
  // --------
  // move to the prev blank line
  {
    "key": "alt+up",
    "command": "cursorMove",
    "args": {
      "to": "prevBlankLine",
    },
    "when": "editorTextFocus"
  },

  // ⇧ to select
  {
    "key": "shift+alt+up",
    "command": "cursorMove",
    "args": {
      "to": "prevBlankLine",
      "select": true
    },
    "when": "editorTextFocus"
  },

  //   ⌥ Down
  // ----------
  // move to the next blank line
  {
    "key": "alt+down",
    "command": "cursorMove",
    "args": {
      "to": "nextBlankLine",
    },
    "when": "editorTextFocus"
  },

  // ⇧ to select
  {
    "key": "shift+alt+down",
    "command": "cursorMove",
    "args": {
      "to": "nextBlankLine",
      "select": true
    },
    "when": "editorTextFocus"
  },




  //   ⌥ Left
  // ----------
  // Move One Whole Word to the Left

  //   ⌥ Right
  // -----------
  // Move One Whole Word to the Right

  //   ⌥ Backspace
  // ---------------
  // Delete One Whole Word to the Left

  //   ⌥ Delete
  // ------------
  // Delete One Whole Word to the Right

  // |---------------------------------|
  // |        ^ + ⌥ + direction        |
  // |---------------------------------|
  // These are exactly like the ⌥ keys,
  // but with a bit more "contol"...

  //   ^ ⌥ Left
  // ------------
  // MoveOneWordPART to_the_Left

  //   ^ ⌥ Right
  // -------------
  // MoveOneWordPART to_the_Right

  //   ^ ⌥ Backspace
  // -----------------
  // DeleteOneWordPART to_the_Left

  //   ^ ⌥ Delete
  // --------------
  // DeleteOneWordPART to_the_Right

  //   ^ ⌥ Up
  // -------------
  // Move Up part of a Page
  {
    "key": "alt+ctrl+up",
    //  command created in commands.commands
    "command": "editor.action.jumpLinesUp",
    "when": "editorTextFocus"
  },
  // ⇧ to select
  {
    "key": "shift+alt+ctrl+up",
    //  command created in commands.commands
    "command": "editor.action.jumpLinesUpSelect",
    "when": "editorTextFocus"
  },

  //   ^ ⌥ Down
  // -------------
  // Move Down part of a Page
  {
    "key": "alt+ctrl+down",
    //  command created in commands.commands
    "command": "editor.action.jumpLinesDown",
    "when": "editorTextFocus"
  },
  // ⇧ to select
  {
    "key": "shift+alt+ctrl+down",
    //  command created in commands.commands
    "command": "editor.action.jumpLinesDownSelect",
    "when": "editorTextFocus"
  },

  // |-----------------------------|
  // |        ^ + direction        |
  // |-----------------------------|
  // Move content using the cursor

  //   ^ Up
  // --------
  // Move Line Above
  {
    "key": "ctrl+up",
    "command": "editor.action.moveLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  // ⇧ to Copy Line Above
  {
    "key": "ctrl+shift+up",
    "command": "editor.action.copyLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },

  //   ^ Down
  // ----------
  // Move Line Below
  {
    "key": "ctrl+down",
    "command": "editor.action.moveLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  // ⇧ to Copy Line Below
  // ⇧ to Copy Line Below
  // ⇧ to Copy Line Below
  // ⇧ to Copy Line Below
  // ⇧ to Copy Line Below
  {
    "key": "ctrl+shift+down",
    "command": "editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },

  //   ^ Left
  // ----------
  // Move Caret Left
  {
    "key": "ctrl+left",
    "command": "editor.action.moveCarretLeftAction",
    "when": "editorTextFocus && editorHasSelection"
  },
  {
    "key": "ctrl+left",
    //  command created in commands.commands
    "command": "editor.action.transposeLettersLeft",
    "when": "textInputFocus && !editorHasSelection"
  },

  //   ^ Right
  // -----------
  // Move Caret Right
  {
    "key": "ctrl+right",
    "command": "editor.action.moveCarretRightAction",
    "when": "editorTextFocus && editorHasSelection"
  },
  {
    "key": "ctrl+right",
    "command": "editor.action.transposeLetters",
    "when": "textInputFocus && !editorHasSelection"
  },

  // remove old navigation keybindings
  {
    "key": "ctrl+t",
    "command": "-editor.action.transposeLetters",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "alt+up",
    "command": "-editor.action.moveLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+up",
    "command": "-editor.action.copyLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+down",
    "command": "-editor.action.moveLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+down",
    "command": "-editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },

```
 



 5 test some stuff

 5 test some stuff

 5 test some stuff
