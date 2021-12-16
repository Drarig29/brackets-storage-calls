## Stage

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L76">Source</a> :material-chevron-down:

```ts
insert('stage', values: Stage[]): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L658">Source</a> :material-chevron-down:

```ts
insert('stage', value: OmitId<Stage>): Promise<number>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L525">Source</a> :material-chevron-down:

```ts
select('stage', filter: {
    tournament_id: number;
}): Promise<Stage[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L834">Source</a> :material-chevron-down:

```ts
select('stage', id: number): Promise<Stage | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L107">Source</a> :material-chevron-down:

```ts
select('stage'): Promise<Stage[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L842">Source</a> :material-chevron-down:

```ts
update('stage', id: number, value: Stage): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/delete.ts#L36">Source</a> :material-chevron-down:

```ts
delete('stage', filter: {
    id: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L74">Source</a> :material-chevron-down:

```ts
delete('stage'): Promise<boolean>
```

## Group

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L81">Source</a> :material-chevron-down:

```ts
insert('group', values: Group[]): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L679">Source</a> :material-chevron-down:

```ts
insert('group', value: OmitId<Group>): Promise<number>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/get.ts#L238">Source</a> :material-chevron-down:

```ts
select('group', filter: {
    stage_id: number;
}): Promise<Group[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/reset.ts#L24">Source</a> :material-chevron-down:

```ts
select('group', id: number): Promise<Group | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L110">Source</a> :material-chevron-down:

```ts
select('group'): Promise<Group[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/delete.ts#L33">Source</a> :material-chevron-down:

```ts
delete('group', filter: {
    stage_id: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L79">Source</a> :material-chevron-down:

```ts
delete('group'): Promise<boolean>
```

## Round

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L86">Source</a> :material-chevron-down:

```ts
insert('round', values: Round[]): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L700">Source</a> :material-chevron-down:

```ts
insert('round', value: OmitId<Round>): Promise<number>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/get.ts#L241">Source</a> :material-chevron-down:

```ts
select('round', filter: {
    stage_id: number;
}): Promise<Round[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/getter.ts#L73">Source</a> :material-chevron-down:

```ts
select('round', filter: {
    group_id: number;
}): Promise<Round[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/find.ts#L65">Source</a> :material-chevron-down:

```ts
select('round', id: number): Promise<Round | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L113">Source</a> :material-chevron-down:

```ts
select('round'): Promise<Round[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/delete.ts#L30">Source</a> :material-chevron-down:

```ts
delete('round', filter: {
    stage_id: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L84">Source</a> :material-chevron-down:

```ts
delete('round'): Promise<boolean>
```

## Match

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L91">Source</a> :material-chevron-down:

```ts
insert('match', values: Match[]): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L713">Source</a> :material-chevron-down:

```ts
insert('match', value: OmitId<Match>): Promise<number>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L195">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    round_id: number;
}): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L178">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    group_id: number;
}): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L161">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    stage_id: number;
}): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/reset.ts#L15">Source</a> :material-chevron-down:

```ts
select('match', id: number): Promise<Match | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L116">Source</a> :material-chevron-down:

```ts
select('match'): Promise<Match[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L192">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    round_id: number;
}, value: {
    child_count: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L175">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    group_id: number;
}, value: {
    child_count: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L158">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    stage_id: number;
}, value: {
    child_count: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L716">Source</a> :material-chevron-down:

```ts
update('match', id: number, value: Match): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L261">Source</a> :material-chevron-down:

```ts
update('match', id: number, value: {
    child_count: number;
    id: number;
    stage_id: number;
    group_id: number;
    round_id: number;
    number: number;
    status: Status;
    opponent1: ParticipantResult | null;
    opponent2: ParticipantResult | null;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L218">Source</a> :material-chevron-down:

```ts
update('match', id: number, value: {
    id: number;
    stage_id: number;
    group_id: number;
    round_id: number;
    number: number;
    child_count: number;
    status: Status;
    opponent1: ParticipantResult | null;
    opponent2: ParticipantResult | null;
}): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/delete.ts#L27">Source</a> :material-chevron-down:

```ts
delete('match', filter: {
    stage_id: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L89">Source</a> :material-chevron-down:

```ts
delete('match'): Promise<boolean>
```

## Match game

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L96">Source</a> :material-chevron-down:

```ts
insert('match_game', values: MatchGame[]): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L738">Source</a> :material-chevron-down:

```ts
insert('match_game', value: OmitId<MatchGame>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L234">Source</a> :material-chevron-down:

```ts
insert('match_game', value: {
    number: number;
    stage_id: number;
    parent_id: number;
    status: Status;
    opponent1: { 
       id: null;
    };
    opponent2: { 
       id: null;
    };
}): Promise<number>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L230">Source</a> :material-chevron-down:

```ts
select('match_game', filter: {
    parent_id: number;
}): Promise<MatchGame[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/reset.ts#L47">Source</a> :material-chevron-down:

```ts
select('match_game', id: number): Promise<MatchGame | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/updater.ts#L159">Source</a> :material-chevron-down:

```ts
update('match_game', filter: {
    parent_id: number;
}, value: Partial<MatchGame>): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L741">Source</a> :material-chevron-down:

```ts
update('match_game', id: number, value: MatchGame): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/delete.ts#L24">Source</a> :material-chevron-down:

```ts
delete('match_game', filter: {
    stage_id: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/update.ts#L250">Source</a> :material-chevron-down:

```ts
delete('match_game', filter: {
    parent_id: number;
    number: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L94">Source</a> :material-chevron-down:

```ts
delete('match_game'): Promise<boolean>
```

## Participant

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L757">Source</a> :material-chevron-down:

```ts
insert('participant', values: OmitId<Participant>[]): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L71">Source</a> :material-chevron-down:

```ts
insert('participant', values: Participant[]): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L764">Source</a> :material-chevron-down:

```ts
insert('participant', value: OmitId<Participant>): Promise<number>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/create.ts#L753">Source</a> :material-chevron-down:

```ts
select('participant', filter: {
    tournament_id: number;
}): Promise<Participant[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L104">Source</a> :material-chevron-down:

```ts
select('participant'): Promise<Participant[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L69">Source</a> :material-chevron-down:

```ts
delete('participant'): Promise<boolean>
```

## Dynamic table

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/manager.ts#L39">Source</a> :material-chevron-down:

```ts
select(table, filter: Partial<DataTypes[T]>): Promise<DataTypes[T][] | null>
```

