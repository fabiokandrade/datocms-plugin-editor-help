# Datocms Plugin: Editor Help

This DatoCMS plugin can be added to a field in order to present extra information for editors.

![](https://github.com/voorhoede/datocms-plugin-editor-help/raw/master/docs/result-in-the-content-editor.png)

## Features

The plugin can be used to provide additional information on the following field types:

* `boolean`
* `color`
* `date`
* `date_time`
* `float`
* `integer`
* `json`
* `lat_lon`
* `link`
* `links`
* `seo`
* `string`
* `text`
* `video`

Content can be provided using Markdown.

## Configuration

First add this plugin via DatoCMS Settings > Plugins > Add.

After installing the plugin, it can be connected to a field using the 'Insert add-on' button.

![](https://raw.githubusercontent.com/voorhoede/datocms-plugin-editor-help/master/docs/adding-the-plugin.png?sanitize=true)

When connected to a field, under the tab 'Presentation', you can add the label of the button and the extra information to be shown in the info panel toggled by the button.

![](https://github.com/voorhoede/datocms-plugin-editor-help/raw/master/docs/model-specific-settings.png)

## Development

Install all the project dependencies with:

```
yarn install
```

Add this plugin in development mode to one of your DatoCMS project with:

```
yarn addToProject
```

Start the local development server with:

```
yarn start
```

The plugin will be served from [http://localhost:5000/](http://localhost:5000/). Insert this URL as the plugin [Entry point URL](https://www.datocms.com/docs/plugins/creating-a-new-plugin/).
