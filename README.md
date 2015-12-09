#fgenie - a flexible file generator

##generate the default folder structure

```bash
fgnie -project <proj-name>
fgnie -p <proj-name>
```

**should result in generating project files based on the defaults or the 
provided config.json.**

---

##generate layout files

```bash
fgnie -layout <main>
fgnie -l <main>
```

###should result in generating layout files. For example:
- [ ] frontend/stylesheets/configs/_main.scss

---

##generate component files

```bash
fgnie -component <parking>
fgnie -c <parking>
```

###should result in generating layout files. For example:
- [ ] frontend/stylesheets/components/_main.scss
