(async () => {
  if (!actor) {
    ui.notifications.warn("No token selected");
    return;
  }
  const charClass = actor.data.items.filter((it) => it.type === "class")[0];
  const conditions = {
    Blinded: "modules/combat-utility-belt/icons/blinded.svg",
    Charmed: "modules/combat-utility-belt/icons/charmed.svg",
    Concentrating: "modules/combat-utility-belt/icons/concentrating.svg",
    Deafened: "modules/combat-utility-belt/icons/deafened.svg",
    Exhaustion: "modules/combat-utility-belt/icons/exhaustion1.svg",
    Frightened: "modules/combat-utility-belt/icons/frightened.svg",
    Grappled: "modules/combat-utility-belt/icons/grappled.svg",
    Incapacitated: "modules/combat-utility-belt/icons/incapacitated.svg",
    Invisible: "modules/combat-utility-belt/icons/invisible.svg",
    Paralyzed: "modules/combat-utility-belt/icons/paralyzed.svg",
    Petrified: "modules/combat-utility-belt/icons/petrified.svg",
    Poisoned: "modules/combat-utility-belt/icons/poisoned.svg",
    Prone: "modules/combat-utility-belt/icons/prone.svg",
    Restrained: "modules/combat-utility-belt/icons/restrained.svg",
    Stunned: "modules/combat-utility-belt/icons/stunned.svg",
    Unconscious: "modules/combat-utility-belt/icons/unconscious.svg",
  };
  let template =
    `
  <h4>Apply to: ` +
    actor.name +
    `</h4>
  <form>

      <div class="form-group">
          <label>Condition:</label>
          <select id="condition-selector" name="condition-selector">
            <option value="Blinded">Blinded</option>
            <option value="Charmed">Charmed</option>
            <option value="Concentrating">Concentrating</option>
            <option value="Deafened">Deafened</option>
            <option value="Exhaustion">Exhaustion</option>
            <option value="Frightened">Frightened</option>
            <option value="Grappled">Grappled</option>
            <option value="Incapacitated">Incapacitated</option>
            <option value="Invisible">Invisible</option>
            <option value="Paralyzed">Paralyzed</option>
            <option value="Petrified">Petrified</option>
            <option value="Poisoned">Poisoned</option>
            <option value="Prone">Prone</option>
            <option value="Restrained">Restrained</option>
            <option value="Stunned">Stunned</option>
            <option value="Unconscious">Unconscious</option>
          </select>
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
          let selectedCondition = html.find("#condition-selector")[0].value;

          canvas.tokens.controlled[0].toggleEffect(
            conditions[selectedCondition]
          );

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
