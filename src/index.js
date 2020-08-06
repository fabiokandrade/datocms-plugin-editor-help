import './style.scss';

const marked = require('marked');

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const container = document.createElement('div');
  container.classList.add('editor-help-block');

  const button = document.createElement('button');
  button.classList.add('editor-help-block__button');
  button.innerHTML = plugin.parameters.instance.buttonLabel;
  container.appendChild(button);

  const description = document.createElement('div');
  description.classList.add('editor-help-block__content');
  description.innerHTML = marked(plugin.parameters.instance.description);
  container.appendChild(description);

  button.addEventListener('click', () => {
    button.classList.toggle('editor-help-block__button--open');
    description.classList.toggle('editor-help-block__content--visible');
  });

  document.body.appendChild(container);
});
