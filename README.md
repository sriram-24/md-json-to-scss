# md-json-to-scss

Converts material design theme ( JSON ) to SCSS styles.

## How to get material design theme json?

- Using the material design theme builder figma plugin. Customize your theme and export it as a json file. More information will be found on the below link.

	[https://www.figma.com/community/plugin/1034969338659738588/Material-Theme-Builder](https://www.figma.com/community/plugin/1034969338659738588/Material-Theme-Builder)

## Installing

- clone the repo.

```

git clone https://github.com/sriram-24/md-json-to-scss.git

```

- install the dependencies.

```

npm install

```

- Copy paste the exported theme contents of the json file to `src/theme.json`

- Run the project

```

npm start

```

- Style resources will be found in `dist/theme` folder.

- Copy the entire `dist/theme` folder and use it in your project.

## Usage

- Import the `theme.scss` file at the top of your file.
- use the `themify()` mixin to create theme based styles.
- Passing the `$themes` variable from the `theme.scss` file to link the variables with the styles.
- Use `themed()` method to map the variables to the styles. This method will check for the theme variable and apply the colors or styles linked.
- Examples will be found on `examples` folder. Compile SCSS before running examples.

```scss
.container{
    height: 300px;
    width: 500px;
    @include themify($themes){
        background-color: themed(md-sys-color-on-surface);
    }
}
```
