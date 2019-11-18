# 🐙 Repssues
React app to get Github issues from repos.
[DEMO](https://obscure-falls-36472.herokuapp.com/)

# Installation



#### 1. Clone this repo. 
```
git clone https://github.com/BaronJensen/Repssues.git
```


#### 2. Install packages
```bash
 cd ./respssues 
npm install
```


#### 3. Launch the development server.
```bash
npm start
```


#### 4. Build a production bundle.
```bash
npm run build
```

#### 4. Run test.
```bash
npm run test
```



# Development Notes
### Stack
 - React 16.12
 - Webpack  & Babel 
 - Less
 - Flow

### ux optimization
- Pagination becomes infinite scrolling.
- Table becomes a table.
- Animations.


### Performance
- API CALLS optimization caching data from API.


## UI Components Arquitecture

- **ErrorCard** (Molecule)

```
Component <ErrorCard> of type Molecule. 
```


- **Header** (Molecule) <=({props}<-Home)
-- FilterBar (Molecule)
-- SortSelector (Molecule)

```
Component <Header> of type Molecule composed with <FilterBar> and <SortSelector>,  receiving props form <Home>
```


- **Pagination** (Molecule) <=({props}<-Home)

```
Component <Pagination> of type Molecule, receiving props form <Home>
```


- **Table** (Molecule) <=({props}<-Home)
-- LoadingItems (Molecule)
-- IssuesHeader (Molecule)
-- IssuesRow (Molecule)
    - LabelList (Molecule)

```
Component <Table> of type Molecule composed with <LoadingItems>, <IssuesRow> and <IssuesHeader>,  receiving props form <Home>.
```


- **Home** (View) <- [History, Search]

```
Component <Home> of type View uses 

```

