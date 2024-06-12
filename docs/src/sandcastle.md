# Sandcastle

![](./sandcastle/banner.png)

Not sure what to play with? Here are some ideas.

```handlebars
git clone {{REPO}}
```

```handlebars
git checkout {{REF}} {{DIFF_FILE}}
```

```handlebars
git show {{REF}}
git show REF~{{RELATIVE_REF}}
git show REF~RELATIVE_REF~{{RELATIVE_REF}}
git show REF~RELATIVE_REF~RELATIVE_REF:{{REF_FILE}}
```

```handlebars
git log {{REF}}
git -C {{FOLDER}} log {{REF}}
```

```handlebars
git add {{MODIFIED_FILE}}
```

```handlebars
gh repo clone {{REPO}} -- --branch {{BRANCH}}
```

```handlebars
gh issue list --repo {{REPOS}} --label {{LABEL}}
```

```handlebars
gh browse --repo {{REPO}} --branch {{BRANCH}} /{{FILE}}
```

```handlebars
gh api --method {{METHOD}} {{API_PATH}}
```

```handlebars
gh alias set NAME {{COMMAND}}
```

```handlebars
gh issue view {{ISSUE}}
set-env GH_REPO {{REPO}}
gh issue view {{ISSUE}}
unset-env {{ENV}}
```
