(async () => {
  if (!actor) {
    ui.notifications.warn("No token selected");
    return;
  }
  const charClass = actor.data.items.filter((it) => it.type === "class")[0];
  let template =
    `
  <h4>Editing HitDie for ` +
    actor.name +
    ` (max: ` +
    charClass.data.levels +
    `)</h4>
  <form>

      <div class="form-group">
          <label>Set HitDie to:</label>
          <input id="hitdie-change" name="hitdie-change"\>
      </div>
  </form>`;
  new Dialog({
    title: `Adjust HitDie`,
    content: template,
    buttons: {
      yes: {
        icon: "<i class='fas fa-check'></i>",
        label: `Apply`,
        callback: (html) => {
          actor.data.data.attributes.hd = html.find("#hitdie-change")[0].value
            ? html.find("#hitdie-change")[0].value
            : 0;
          if (actor.sheet.rendered) {
            // Update the actor sheet if it is currently open
            actor.render(true);
          }
        },
      },
      no: {
        icon: "<i class='fas fa-times'></i>",
        label: `Cancel`,
      },
    },
    default: "yes",
  }).render(true);
})();
