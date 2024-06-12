# Sandcastle

![](./sandcastle/banner.png)

Not sure what to play with? Here are some ideas.

```handlebars
gh repo clone {{REPO}} -- --branch {{BRANCH}}
```

```handlebars
gh issue list --repo {{REPOS}} --label {{LABEL}}
```

```handlebars
gh browse --repo {{REPO}} --branch {{BRANCH}} /{{FILES}}
```

```handlebars
gh api --method {{METHOD}} {{API_PATH}}
```

```handlebars
gh alias set NAME {{COMMAND}}
```

```handlebars
git show {{REF}}
git show REF~{{RELATIVE_REF}}
git show REF~RELATIVE_REF~{{RELATIVE_REF}}
git show REF~RELATIVE_REF~RELATIVE_REF:{{REF_FILES}}
```

```handlebars
git checkout {{REF}} {{UNEQUAL_FILES}}
```

```handlebars
git log {{REF}}
git -C {{FOLDER}} log {{REF}}
```

```handlebars
git add {{MODIFIED_FILES}}
```

```handlebars
gh issue view {{ISSUE}}
set-env GH_REPO {{REPO}}
gh issue view {{ISSUE}}
unset-env {{ENV}}
```
