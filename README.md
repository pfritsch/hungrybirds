# Hungrybirds
## Blog de voyage

Framework: https://hexo.io/
URL: http://hungrybirds.toile-libre.org/

## Structure

Once initialised, here’s what your project folder will look like:

``` bash
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

## New article

``` bash
$ hexo new [layout] <title>
```

Creates a new article. If no `layout` is provided, Hexo will use the `default_layout` from [_config.yml](configuration.html). If the `title` contains spaces, surround it with quotation marks.

For the timezone, pick one here: [http://php.net/manual/fr/timezones.php](Timezones)


## Generate static files

``` bash
$ hexo generate
```

Option | Description
--- | ---
`-d`, `--deploy` | Deploy after generation finishes
`-w`, `--watch` | Watch file changes


## Starts a local server

``` bash
$ hexo server
```

By default, this is at `http://localhost:4000/`.
