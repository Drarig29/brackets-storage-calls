`insert('stage'): Promise<number>` [create.ts:658]

### Argument 1

- Types

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

- Types

```ts
Stage[]
```

- Usage

```js
data.stage
```

---

`select('stage'): Promise<Stage | null>` [create.ts:655]

### Argument 1

- Types

```ts
number
```

- Usage

```js
this.currentStageId
```

---

`select('stage'): Promise<Stage[] | null>` [create.ts:525]

### Argument 1

- Types

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

`select('stage'): Promise<Stage | null>` [update.ts:77]

### Argument 1

- Types

```ts
number
```

- Usage

```js
round.stage_id
```

---

`select('stage'): Promise<Stage | null>` [updater.ts:131]

### Argument 1

- Types

```ts
number
```

- Usage

```js
stored.stage_id
```

---

`select('stage'): Promise<Stage | null>` [updater.ts:102]

### Argument 1

- Types

```ts
number
```

- Usage

```js
match.stage_id
```

---

`select('stage'): Promise<Stage | null>` [updater.ts:62]

### Argument 1

- Types

```ts
number
```

- Usage

```js
storedParent.stage_id
```

---

`select('stage'): Promise<Stage | null>` [get.ts:73]

### Argument 1

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('stage'): Promise<Stage[] | null>` [get.ts:35]

### Argument 1

- Types

```ts
{
    tournament_id: number;
}
```

- Usage

```js
{ tournament_id: tournamentId }
```

---

`update('stage'): Promise<boolean>` [create.ts:842]

### Argument 1

- Types

```ts
number
```

- Usage

```js
stageId
```

### Argument 2

- Types

```ts
Stage
```

- Usage

```js
stage
```

---

`delete('stage'): Promise<boolean>` [delete.ts:36]

### Argument 1

- Types

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

- Types

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

- Types

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

- Types

```ts
number
```

- Usage

```js
stored.group_id
```

---

`select('group'): Promise<Group | null>` [update.ts:140]

### Argument 1

- Types

```ts
number
```

- Usage

```js
round.group_id
```

---

`select('group'): Promise<Group | null>` [updater.ts:105]

### Argument 1

- Types

```ts
number
```

- Usage

```js
match.group_id
```

---

`select('group'): Promise<Group[] | null>` [get.ts:238]

### Argument 1

- Types

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

- Types

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

- Types

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

- Types

```ts
number
```

- Usage

```js
match.round_id
```

---

`select('round'): Promise<Round[] | null>` [getter.ts:73]

### Argument 1

- Types

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

`select('round'): Promise<Round | null>` [getter.ts:70]

### Argument 1

- Types

```ts
number
```

- Usage

```js
roundId
```

---

`select('round'): Promise<Round[] | null>` [getter.ts:50]

### Argument 1

- Types

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

- Types

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

- Types

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

`select('match'): Promise<Match | null>` [find.ts:56]

### Argument 1

- Types

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

- Types

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

- Types

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

`select('match'): Promise<Match | null>` [update.ts:104]

### Argument 1

- Types

```ts
number
```

- Usage

```js
id
```

---

`select('match'): Promise<Match | null>` [update.ts:20]

### Argument 1

- Types

```ts
number
```

- Usage

```js
match.id
```

---

`select('match'): Promise<Match | null>` [updater.ts:53]

### Argument 1

- Types

```ts
number
```

- Usage

```js
parentId
```

---

`select('match'): Promise<Match[] | null>` [get.ts:139]

### Argument 1

- Types

```ts
{
    round_id: number;
}
```

- Usage

```js
{ round_id: round.id }
```

---

`select('match'): Promise<Match[] | null>` [get.ts:112]

### Argument 1

- Types

```ts
{
    stage_id: number;
}
```

- Usage

```js
{ stage_id: stage.id }
```

---

`select('match'): Promise<Match[] | null>` [getter.ts:380]

### Argument 1

- Types

```ts
{
    round_id: number;
}
```

- Usage

```js
{ round_id: firstRound.id }
```

---

`select('match'): Promise<Match[] | null>` [getter.ts:377]

### Argument 1

- Types

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

- Types

```ts
number
```

- Usage

```js
existing.id
```

### Argument 2

- Types

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

- Types

```ts
number
```

- Usage

```js
match.id
```

### Argument 2

- Types

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

- Types

```ts
number
```

- Usage

```js
updated.id
```

### Argument 2

- Types

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

- Types

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

- Types

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

- Types

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

- Types

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

- Types

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

- Types

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

`update('match'): Promise<boolean>` [updater.ts:144]

### Argument 1

- Types

```ts
number
```

- Usage

```js
match.id
```

### Argument 2

- Types

```ts
Match
```

- Usage

```js
match
```

---

`insert('match_game'): Promise<number>` [create.ts:738]

### Argument 1

- Types

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

- Types

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

- Types

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

- Types

```ts
number
```

- Usage

```js
gameId
```

---

`select('match_game'): Promise<MatchGame[] | null>` [updater.ts:56]

### Argument 1

- Types

```ts
{
    parent_id: number;
}
```

- Usage

```js
{ parent_id: parentId }
```

---

`select('match_game'): Promise<MatchGame[] | null>` [get.ts:61]

### Argument 1

- Types

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

`select('match_game'): Promise<MatchGame | null>` [getter.ts:499]

### Argument 1

- Types

```ts
number
```

- Usage

```js
game.id
```

---

`update('match_game'): Promise<boolean>` [create.ts:741]

### Argument 1

- Types

```ts
number
```

- Usage

```js
existing.id
```

### Argument 2

- Types

```ts
MatchGame
```

- Usage

```js
updated
```

---

`update('match_game'): Promise<boolean>` [update.ts:41]

### Argument 1

- Types

```ts
number
```

- Usage

```js
stored.id
```

### Argument 2

- Types

```ts
MatchGame
```

- Usage

```js
stored
```

---

`update('match_game'): Promise<boolean>` [updater.ts:159]

### Argument 1

- Types

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

- Types

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

- Types

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

- Types

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

- Types

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

- Types

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

- Types

```ts
Participant[]
```

- Usage

```js
data.participant
```

---

`select('participant'): Promise<Participant[] | null>` [create.ts:502]

### Argument 1

- Types

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

`select('participant'): Promise<Participant[] | null>` [get.ts:40]

### Argument 1

- Types

```ts
{
    tournament_id: number;
}
```

- Usage

```js
{ tournament_id: tournamentId }
```

---

`select('participant'): Promise<Participant[] | null>` [get.ts:16]

### Argument 1

- Types

```ts
{
    tournament_id: number;
}
```

- Usage

```js
{ tournament_id: stageData.stage.tournament_id }
```

---

`select(table): Promise<DataTypes[T][] | null>` [manager.ts:33]

### Argument 1

- Types

```ts
Partial<DataTypes[T]>
```

- Usage

```js
filter
```

---

