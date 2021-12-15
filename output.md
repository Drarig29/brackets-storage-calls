`insert('stage'): Promise<number>` [create.ts:658]

### Argument 1

- Name

values

- Type

```ts
OmitId<Stage>
```

- Usage

```js
stage
```

---

`insert('stage'): Promise<boolean>` [manager.ts:76]

### Argument 1

- Name

values

- Type

```ts
Stage[]
```

- Usage

```js
data.stage
```

---

`select('stage'): Promise<Stage | null>` [create.ts:834]

### Argument 1

- Name

filter

- Type

```ts
number
```

- Usage

```js
stageId
```

---

`select('stage'): Promise<Stage[] | null>` [create.ts:525]

### Argument 1

- Name

filter

- Type

```ts
{
    tournament_id: number;
}
```

- Usage

```js
{ tournament_id: this.stage.tournamentId }
```

---

`select('stage'): Promise<Stage[] | null>` [manager.ts:107]

---

`update('stage'): Promise<boolean>` [create.ts:842]

### Argument 1

- Name

filter

- Type

```ts
number
```

- Usage

```js
stageId
```

### Argument 2

- Name

value

- Type

```ts
Stage
```

- Usage

```js
stage
```

---

`delete('stage'): Promise<boolean>` [manager.ts:74]

---

`delete('stage'): Promise<boolean>` [delete.ts:36]

### Argument 1

- Name

filter

- Type

```ts
{
    id: number;
}
```

- Usage

```js
{ id: stageId }
```

---

`insert('group'): Promise<number>` [create.ts:679]

### Argument 1

- Name

values

- Type

```ts
OmitId<Group>
```

- Usage

```js
group
```

---

`insert('group'): Promise<boolean>` [manager.ts:81]

### Argument 1

- Name

values

- Type

```ts
Group[]
```

- Usage

```js
data.group
```

---

`select('group'): Promise<Group[] | null>` [manager.ts:110]

---

`select('group'): Promise<Group | null>` [reset.ts:24]

### Argument 1

- Name

filter

- Type

```ts
number
```

- Usage

```js
stored.group_id
```

---

`select('group'): Promise<Group[] | null>` [get.ts:238]

### Argument 1

- Name

filter

- Type

```ts
{
    stage_id: number;
}
```

- Usage

```js
{ stage_id: stageId }
```

---

`delete('group'): Promise<boolean>` [manager.ts:79]

---

`delete('group'): Promise<boolean>` [delete.ts:33]

### Argument 1

- Name

filter

- Type

```ts
{
    stage_id: number;
}
```

- Usage

```js
{ stage_id: stageId }
```

---

`insert('round'): Promise<number>` [create.ts:700]

### Argument 1

- Name

values

- Type

```ts
OmitId<Round>
```

- Usage

```js
round
```

---

`insert('round'): Promise<boolean>` [manager.ts:86]

### Argument 1

- Name

values

- Type

```ts
Round[]
```

- Usage

```js
data.round
```

---

`select('round'): Promise<Round[] | null>` [manager.ts:113]

---

`select('round'): Promise<Round | null>` [find.ts:65]

### Argument 1

- Name

filter

- Type

```ts
number
```

- Usage

```js
match.round_id
```

---

`select('round'): Promise<Round[] | null>` [get.ts:241]

### Argument 1

- Name

filter

- Type

```ts
{
    stage_id: number;
}
```

- Usage

```js
{ stage_id: stageId }
```

---

`select('round'): Promise<Round[] | null>` [getter.ts:73]

### Argument 1

- Name

filter

- Type

```ts
{
    group_id: number;
}
```

- Usage

```js
{ group_id: round.group_id }
```

---

`delete('round'): Promise<boolean>` [manager.ts:84]

---

`delete('round'): Promise<boolean>` [delete.ts:30]

### Argument 1

- Name

filter

- Type

```ts
{
    stage_id: number;
}
```

- Usage

```js
{ stage_id: stageId }
```

---

`insert('match'): Promise<number>` [create.ts:713]

### Argument 1

- Name

values

- Type

```ts
OmitId<Match>
```

- Usage

```js
match
```

---

`insert('match'): Promise<boolean>` [manager.ts:91]

### Argument 1

- Name

values

- Type

```ts
Match[]
```

- Usage

```js
data.match
```

---

`select('match'): Promise<Match[] | null>` [manager.ts:116]

---

`select('match'): Promise<Match | null>` [reset.ts:15]

### Argument 1

- Name

filter

- Type

```ts
number
```

- Usage

```js
matchId
```

---

`select('match'): Promise<Match[] | null>` [update.ts:195]

### Argument 1

- Name

filter

- Type

```ts
{
    round_id: number;
}
```

- Usage

```js
{ round_id: roundId }
```

---

`select('match'): Promise<Match[] | null>` [update.ts:178]

### Argument 1

- Name

filter

- Type

```ts
{
    group_id: number;
}
```

- Usage

```js
{ group_id: groupId }
```

---

`select('match'): Promise<Match[] | null>` [update.ts:161]

### Argument 1

- Name

filter

- Type

```ts
{
    stage_id: number;
}
```

- Usage

```js
{ stage_id: stageId }
```

---

`update('match'): Promise<boolean>` [create.ts:716]

### Argument 1

- Name

filter

- Type

```ts
number
```

- Usage

```js
existing.id
```

### Argument 2

- Name

value

- Type

```ts
Match
```

- Usage

```js
updated
```

---

`update('match'): Promise<boolean>` [update.ts:261]

### Argument 1

- Name

filter

- Type

```ts
number
```

- Usage

```js
match.id
```

### Argument 2

- Name

value

- Type

```ts
{
    child_count: number;
    id: number;
    stage_id: number;
    group_id: number;
    round_id: number;
    number: number;
    status: Status;
    opponent1: ParticipantResult | null;
    opponent2: ParticipantResult | null;
}
```

- Usage

```js
{ ...match, child_count: targetChildCount }
```

---

`update('match'): Promise<boolean>` [update.ts:218]

### Argument 1

- Name

filter

- Type

```ts
number
```

- Usage

```js
updated.id
```

### Argument 2

- Name

value

- Type

```ts
{
    id: number;
    stage_id: number;
    group_id: number;
    round_id: number;
    number: number;
    child_count: number;
    status: Status;
    opponent1: ParticipantResult | null;
    opponent2: ParticipantResult | null;
}
```

- Usage

```js
updated
```

---

`update('match'): Promise<boolean>` [update.ts:192]

### Argument 1

- Name

filter

- Type

```ts
{
    round_id: number;
}
```

- Usage

```js
{ round_id: roundId }
```

### Argument 2

- Name

value

- Type

```ts
{
    child_count: number;
}
```

- Usage

```js
{ child_count: childCount }
```

---

`update('match'): Promise<boolean>` [update.ts:175]

### Argument 1

- Name

filter

- Type

```ts
{
    group_id: number;
}
```

- Usage

```js
{ group_id: groupId }
```

### Argument 2

- Name

value

- Type

```ts
{
    child_count: number;
}
```

- Usage

```js
{ child_count: childCount }
```

---

`update('match'): Promise<boolean>` [update.ts:158]

### Argument 1

- Name

filter

- Type

```ts
{
    stage_id: number;
}
```

- Usage

```js
{ stage_id: stageId }
```

### Argument 2

- Name

value

- Type

```ts
{
    child_count: number;
}
```

- Usage

```js
{ child_count: childCount }
```

---

`delete('match'): Promise<boolean>` [manager.ts:89]

---

`delete('match'): Promise<boolean>` [delete.ts:27]

### Argument 1

- Name

filter

- Type

```ts
{
    stage_id: number;
}
```

- Usage

```js
{ stage_id: stageId }
```

---

`insert('match_game'): Promise<number>` [create.ts:738]

### Argument 1

- Name

values

- Type

```ts
OmitId<MatchGame>
```

- Usage

```js
matchGame
```

---

`insert('match_game'): Promise<boolean>` [manager.ts:96]

### Argument 1

- Name

values

- Type

```ts
MatchGame[]
```

- Usage

```js
data.match_game
```

---

`insert('match_game'): Promise<number>` [update.ts:234]

### Argument 1

- Name

values

- Type

```ts
{
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
}
```

- Usage

```js
{
    number: childCount + 1,
    stage_id: match.stage_id,
    parent_id: match.id,
    status: match.status,
    opponent1: { id: null },
    opponent2: { id: null },
}
```

---

`select('match_game'): Promise<MatchGame | null>` [reset.ts:47]

### Argument 1

- Name

filter

- Type

```ts
number
```

- Usage

```js
gameId
```

---

`select('match_game'): Promise<MatchGame[] | null>` [update.ts:230]

### Argument 1

- Name

filter

- Type

```ts
{
    parent_id: number;
}
```

- Usage

```js
{ parent_id: match.id }
```

---

`update('match_game'): Promise<boolean>` [create.ts:741]

### Argument 1

- Name

filter

- Type

```ts
number
```

- Usage

```js
existing.id
```

### Argument 2

- Name

value

- Type

```ts
MatchGame
```

- Usage

```js
updated
```

---

`update('match_game'): Promise<boolean>` [updater.ts:159]

### Argument 1

- Name

filter

- Type

```ts
{
    parent_id: number;
}
```

- Usage

```js
{ parent_id: match.id }
```

### Argument 2

- Name

value

- Type

```ts
Partial<MatchGame>
```

- Usage

```js
updatedMatchGame
```

---

`delete('match_game'): Promise<boolean>` [manager.ts:94]

---

`delete('match_game'): Promise<boolean>` [delete.ts:24]

### Argument 1

- Name

filter

- Type

```ts
{
    stage_id: number;
}
```

- Usage

```js
{ stage_id: stageId }
```

---

`delete('match_game'): Promise<boolean>` [update.ts:250]

### Argument 1

- Name

filter

- Type

```ts
{
    parent_id: number;
    number: number;
}
```

- Usage

```js
{
    parent_id: match.id,
    number: childCount,
}
```

---

`insert('participant'): Promise<number>` [create.ts:764]

### Argument 1

- Name

values

- Type

```ts
OmitId<Participant>
```

- Usage

```js
participant
```

---

`insert('participant'): Promise<boolean>` [create.ts:757]

### Argument 1

- Name

values

- Type

```ts
OmitId<Participant>[]
```

- Usage

```js
participants
```

---

`insert('participant'): Promise<boolean>` [manager.ts:71]

### Argument 1

- Name

values

- Type

```ts
Participant[]
```

- Usage

```js
data.participant
```

---

`select('participant'): Promise<Participant[] | null>` [create.ts:753]

### Argument 1

- Name

filter

- Type

```ts
{
    tournament_id: number;
}
```

- Usage

```js
{ tournament_id: this.stage.tournamentId }
```

---

`select('participant'): Promise<Participant[] | null>` [manager.ts:104]

---

`delete('participant'): Promise<boolean>` [manager.ts:69]

---

`select(table): Promise<DataTypes[T][] | null>` [manager.ts:39]

### Argument 1

- Name

filter

- Type

```ts
Partial<DataTypes[T]>
```

- Usage

```js
filter
```

---

