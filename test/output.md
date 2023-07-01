## Dynamic table

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L45">Source</a> :material-chevron-down:

```ts
select(table, filter: Partial<DataTypes[T]>): Promise<DataTypes[T][] | null>
```

## Stage

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/stageCreator.ts#L679">Source</a> :material-chevron-down:

```ts
insert('stage', value: OmitId<Stage>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L98">Source</a> :material-chevron-down:

```ts
insert('stage', values: Stage[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L129">Source</a> :material-chevron-down:

```ts
select('stage'): Promise<Stage[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/get.ts#L139">Source</a> :material-chevron-down:

```ts
select('stage', id: Id): Promise<Stage | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/get.ts#L35">Source</a> :material-chevron-down:

```ts
select('stage', filter: {
    tournament_id: Id;
}): Promise<Stage[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/stageCreator.ts#L674">Source</a> :material-chevron-down:

```ts
update('stage', id: Id, value: Stage): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L96">Source</a> :material-chevron-down:

```ts
delete('stage'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/delete.ts#L42">Source</a> :material-chevron-down:

```ts
delete('stage', filter: {
    id: Id;
}): Promise<boolean>
```

## Group

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/stageCreator.ts#L700">Source</a> :material-chevron-down:

```ts
insert('group', value: OmitId<Group>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L103">Source</a> :material-chevron-down:

```ts
insert('group', values: Group[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L132">Source</a> :material-chevron-down:

```ts
select('group'): Promise<Group[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/updater.ts#L133">Source</a> :material-chevron-down:

```ts
select('group', id: Id): Promise<Group | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/get.ts#L360">Source</a> :material-chevron-down:

```ts
select('group', filter: {
    stage_id: Id;
}): Promise<Group[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L101">Source</a> :material-chevron-down:

```ts
delete('group'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/delete.ts#L39">Source</a> :material-chevron-down:

```ts
delete('group', filter: {
    stage_id: Id;
}): Promise<boolean>
```

## Round

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/stageCreator.ts#L721">Source</a> :material-chevron-down:

```ts
insert('round', value: OmitId<Round>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L108">Source</a> :material-chevron-down:

```ts
insert('round', values: Round[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L135">Source</a> :material-chevron-down:

```ts
select('round'): Promise<Round[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/getter.ts#L70">Source</a> :material-chevron-down:

```ts
select('round', id: Id): Promise<Round | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/getter.ts#L50">Source</a> :material-chevron-down:

```ts
select('round', filter: {
    stage_id: Id;
}): Promise<Round[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/getter.ts#L73">Source</a> :material-chevron-down:

```ts
select('round', filter: {
    group_id: Id;
}): Promise<Round[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L106">Source</a> :material-chevron-down:

```ts
delete('round'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/delete.ts#L36">Source</a> :material-chevron-down:

```ts
delete('round', filter: {
    stage_id: Id;
}): Promise<boolean>
```

## Match

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/stageCreator.ts#L734">Source</a> :material-chevron-down:

```ts
insert('match', value: OmitId<Match>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L113">Source</a> :material-chevron-down:

```ts
insert('match', values: Match[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L138">Source</a> :material-chevron-down:

```ts
select('match'): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/updater.ts#L85">Source</a> :material-chevron-down:

```ts
select('match', id: Id): Promise<Match | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/getter.ts#L376">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    stage_id: Id;
}): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/getter.ts#L380">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    round_id: Id;
}): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/update.ts#L191">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    group_id: Id;
}): Promise<Match[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/updater.ts#L197">Source</a> :material-chevron-down:

```ts
update('match', id: Id, value: Match): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/update.ts#L231">Source</a> :material-chevron-down:

```ts
update('match', id: Id, value: {
    id: Id;
    stage_id: Id;
    group_id: Id;
    round_id: Id;
    number: number;
    child_count: number;
    status: Status;
    opponent1: ParticipantResult | null;
    opponent2: ParticipantResult | null;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/update.ts#L274">Source</a> :material-chevron-down:

```ts
update('match', id: Id, value: {
    child_count: number;
    id: Id;
    stage_id: Id;
    group_id: Id;
    round_id: Id;
    number: number;
    status: Status;
    opponent1: ParticipantResult | null;
    opponent2: ParticipantResult | null;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/update.ts#L171">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    stage_id: Id;
}, value: {
    child_count: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/update.ts#L188">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    group_id: Id;
}, value: {
    child_count: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/update.ts#L205">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    round_id: Id;
}, value: {
    child_count: number;
}): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L111">Source</a> :material-chevron-down:

```ts
delete('match'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/delete.ts#L33">Source</a> :material-chevron-down:

```ts
delete('match', filter: {
    stage_id: Id;
}): Promise<boolean>
```

## Match game

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/update.ts#L247">Source</a> :material-chevron-down:

```ts
insert('match_game', value: {
    number: number;
    stage_id: Id;
    parent_id: Id;
    status: Status;
    opponent1: { 
       id: null;
    };
    opponent2: { 
       id: null;
    };
}): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/stageCreator.ts#L759">Source</a> :material-chevron-down:

```ts
insert('match_game', value: OmitId<MatchGame>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L118">Source</a> :material-chevron-down:

```ts
insert('match_game', values: MatchGame[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/getter.ts#L502">Source</a> :material-chevron-down:

```ts
select('match_game', id: Id): Promise<MatchGame | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/get.ts#L61">Source</a> :material-chevron-down:

```ts
select('match_game', filter: {
    parent_id: Id;
}): Promise<MatchGame[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/updater.ts#L185">Source</a> :material-chevron-down:

```ts
update('match_game', id: Id, value: MatchGame): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/updater.ts#L212">Source</a> :material-chevron-down:

```ts
update('match_game', filter: {
    parent_id: Id;
}, value: Partial<MatchGame>): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L116">Source</a> :material-chevron-down:

```ts
delete('match_game'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/update.ts#L263">Source</a> :material-chevron-down:

```ts
delete('match_game', filter: {
    parent_id: Id;
    number: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/delete.ts#L30">Source</a> :material-chevron-down:

```ts
delete('match_game', filter: {
    stage_id: Id;
}): Promise<boolean>
```

## Participant

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/stageCreator.ts#L785">Source</a> :material-chevron-down:

```ts
insert('participant', value: OmitId<Participant>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L93">Source</a> :material-chevron-down:

```ts
insert('participant', values: Participant[]): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/base/stageCreator.ts#L778">Source</a> :material-chevron-down:

```ts
insert('participant', values: OmitId<Participant>[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L126">Source</a> :material-chevron-down:

```ts
select('participant'): Promise<Participant[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/get.ts#L16">Source</a> :material-chevron-down:

```ts
select('participant', filter: {
    tournament_id: Id;
}): Promise<Participant[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/e6d0b90d0046894da5258c7456d63b1fff98ba53/src/manager.ts#L91">Source</a> :material-chevron-down:

```ts
delete('participant'): Promise<boolean>
```