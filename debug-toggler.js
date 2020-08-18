(async () => {
  let template = `<ul>`+
  `<li>av: `+CONFIG.debug.av+`</li>` +
  `<li>avclient: `+CONFIG.debug.avclient+`</li>` +
  `<li>hooks: `+CONFIG.debug.hooks+`</li>` +
  `<li>mouseInteraction: `+CONFIG.debug.mouseInteraction+`</li>` +
  `<li>sight: `+CONFIG.debug.sight+`</li>` +
  `</ul>` +
  `<form>

      <div class="form-group">
          <label>Toggle:</label>
          <select id="debug-status-selector" name="debug-status-selector">
            <option value="av">av</option>
            <option value="avclient">avclient</option>
            <option value="hooks">hooks</option>
            <option value="mouseInteraction">mouseInteraction</option>
            <option value="sight">sight</option>
          </select>
      </div>
  </form>`;
  new Dialog({
    title: `Debug Status`,
    content: template,
    buttons: {
              yes: {
        icon: "<i class='fas fa-check'></i>",
        label: `Apply`,
        callback: (html) => {
          let selectedDebugChannel = html.find("#debug-status-selector")[0].value;

          CONFIG.debug[selectedDebugChannel] = !CONFIG.debug[selectedDebugChannel];
        },
      },
      no: {
        icon: "<i class='fas fa-times'></i>",
        label: `Cancel`,
      }},
  }).render(true);
})();
