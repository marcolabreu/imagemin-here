# Imagemin-Here

Imagemin is a very good image optimizer, broadly used by many task runners, pipeline processor, and static generators. Those softwares usually include some sort of plugin or wrapper to allow the image in to be run using the same syntax as the main package. 

This project is about using **imagemin** directly, cutting the middleman. Maybe you are familiar with Node and JavaScript but don't to learn a specific task manager syntax. Or maybe you just need to optimize PNG and nothing else. 

By the way, this initial version includes PNG optimization plugins exclusively. Others may be added in the future, but if you can manage the requirements below, it should not be difficult to modify the included scripts to run other plugins.

## Requirements

NodeJS and a package manager that install the required modules and dependencies listed in `package.json`. Both `yarn` and `npm` should work fine, but the instructions below are only given for the former.

## Installation 

Download from Github and unzip or clone the repository with:

```sh
git clone https://github.com/marcolabreu/imagemin-here
```

Then all modules should be installed with your favorite package manager like in: 

```sh
cd imagemin-here
yarn
```

## Usage

Put the PNG files you want to optimize in the `source_images`. If you're not sure about the desired results, the simplest possible use case is:

```sh
cd imagemin-here
yarn all
```

This will run four different PNG optimize plugins and output everything to subfolders of `optimized_images`.

ALternatively, from the `imagemin-here` directory run

```sh
yarn run
```

and after complaining with `error No command specified`, `yarn` will list all project commands available in bold. 

## Imagemin included plugins

Each **imagemin** plugin gives different results. Here is a short description purely based on my experience with them. This is in no way information provided by the optimizers authors and maintainers. It's even possible I'm giving plain wrong information in this section, so take it with salt.

### pngquant

**You need the smallest possible files**

Super fast, gives the smallest files by a mile, because it is a lossy reduction. If the resulting images are good enough is entirely your call. The parameters in the provided script are conservative, but `quality` is set to a value below the default. 

### optipng

**You want all the possible reduction while maintaining very good quality**

It seems to be the most used PNG plugin, and it's included in many task runners. Very quality output, with a small loss in the compression—which can be turned off by the way—. Parameters above the default can take a long time for big files.

### pngcrush

**Same as above, almost no tweaking available**

It works like you are running the above `optipng` with `optimizationLevel: 5`. And is equally slow. But it's included as an alternative and for sake of completeness.

### pngout

**You need every pixel in the original image**

Lossless, it tries to find a better compression using sheer processing power. If you want the best possible images and don't mind waiting. It takes longer than the other plugins and will stress your hardware.