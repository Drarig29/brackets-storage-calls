`insert('match_game'): Promise<number>` [update.ts:234]

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

`insert('participant'): Promise<boolean>` [manager.ts:71]

- Types

```ts
Participant[]
```

- Usage

```js
data.participant
```

---

`insert('stage'): Promise<boolean>` [manager.ts:76]

- Types

```ts
Stage[]
```

- Usage

```js
data.stage
```

---

`insert('group'): Promise<boolean>` [manager.ts:81]

- Types

```ts
Group[]
```

- Usage

```js
data.group
```

---

`insert('round'): Promise<boolean>` [manager.ts:86]

- Types

```ts
Round[]
```

- Usage

```js
data.round
```

---

`insert('match'): Promise<boolean>` [manager.ts:91]

- Types

```ts
Match[]
```

- Usage

```js
data.match
```

---

`insert('match_game'): Promise<boolean>` [manager.ts:96]

- Types

```ts
MatchGame[]
```

- Usage

```js
data.match_game
```

---

`insert('stage'): Promise<number>` [create.ts:658]

- Types

```ts
OmitId<Stage>
```

- Usage

```js
stage
```

---

`insert('group'): Promise<number>` [create.ts:679]

- Types

```ts
OmitId<Group>
```

- Usage

```js
group
```

---

`insert('round'): Promise<number>` [create.ts:700]

- Types

```ts
OmitId<Round>
```

- Usage

```js
round
```

---

`insert('match'): Promise<number>` [create.ts:713]

- Types

```ts
OmitId<Match>
```

- Usage

```js
match
```

---

`insert('match_game'): Promise<number>` [create.ts:738]

- Types

```ts
OmitId<MatchGame>
```

- Usage

```js
matchGame
```

---

`insert('participant'): Promise<boolean>` [create.ts:757]

- Types

```ts
OmitId<Participant>[]
```

- Usage

```js
participants
```

---

`insert('participant'): Promise<number>` [create.ts:764]

- Types

```ts
OmitId<Participant>
```

- Usage

```js
participant
```

---

`insert('match_game'): Promise<number>` [update.ts:234]

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

`insert('participant'): Promise<boolean>` [manager.ts:71]

- Types

```ts
Participant[]
```

- Usage

```js
data.participant
```

---

`insert('stage'): Promise<boolean>` [manager.ts:76]

- Types

```ts
Stage[]
```

- Usage

```js
data.stage
```

---

`insert('group'): Promise<boolean>` [manager.ts:81]

- Types

```ts
Group[]
```

- Usage

```js
data.group
```

---

`insert('round'): Promise<boolean>` [manager.ts:86]

- Types

```ts
Round[]
```

- Usage

```js
data.round
```

---

`insert('match'): Promise<boolean>` [manager.ts:91]

- Types

```ts
Match[]
```

- Usage

```js
data.match
```

---

`insert('match_game'): Promise<boolean>` [manager.ts:96]

- Types

```ts
MatchGame[]
```

- Usage

```js
data.match_game
```

---

`insert('stage'): Promise<number>` [create.ts:658]

- Types

```ts
OmitId<Stage>
```

- Usage

```js
stage
```

---

`insert('group'): Promise<number>` [create.ts:679]

- Types

```ts
OmitId<Group>
```

- Usage

```js
group
```

---

`insert('round'): Promise<number>` [create.ts:700]

- Types

```ts
OmitId<Round>
```

- Usage

```js
round
```

---

`insert('match'): Promise<number>` [create.ts:713]

- Types

```ts
OmitId<Match>
```

- Usage

```js
match
```

---

`insert('match_game'): Promise<number>` [create.ts:738]

- Types

```ts
OmitId<MatchGame>
```

- Usage

```js
matchGame
```

---

`insert('participant'): Promise<boolean>` [create.ts:757]

- Types

```ts
OmitId<Participant>[]
```

- Usage

```js
participants
```

---

`insert('participant'): Promise<number>` [create.ts:764]

- Types

```ts
OmitId<Participant>
```

- Usage

```js
participant
```

---

`select('round'): Promise<Round[] | null>` [getter.ts:50]

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

`select('round'): Promise<Round | null>` [getter.ts:70]

- Types

```ts
number
```

- Usage

```js
roundId
```

---

`select('round'): Promise<Round[] | null>` [getter.ts:73]

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

`select('match'): Promise<Match[] | null>` [getter.ts:377]

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

`select('match'): Promise<Match[] | null>` [getter.ts:380]

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

`select('match_game'): Promise<MatchGame | null>` [getter.ts:499]

- Types

```ts
number
```

- Usage

```js
game.id
```

---

`select('stage'): Promise<Stage | null>` [get.ts:14]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('group'): Promise<Group[] | null>` [get.ts:17]

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

`select('round'): Promise<Round[] | null>` [get.ts:20]

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

`select('match'): Promise<Match[] | null>` [get.ts:23]

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

`select('participant'): Promise<Participant[] | null>` [get.ts:26]

- Types

```ts
{
    tournament_id: number;
}
```

- Usage

```js
{ tournament_id: stage.tournament_id }
```

---

`select('match_game'): Promise<MatchGame[] | null>` [get.ts:49]

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

`select('stage'): Promise<Stage | null>` [get.ts:61]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('stage'): Promise<Stage | null>` [get.ts:76]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('match'): Promise<Match[] | null>` [get.ts:100]

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

`select('match'): Promise<Match[] | null>` [get.ts:127]

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

`select('stage'): Promise<Stage | null>` [updater.ts:18]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('match'): Promise<Match | null>` [updater.ts:53]

- Types

```ts
number
```

- Usage

```js
parentId
```

---

`select('match_game'): Promise<MatchGame[] | null>` [updater.ts:56]

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

`select('stage'): Promise<Stage | null>` [updater.ts:62]

- Types

```ts
number
```

- Usage

```js
storedParent.stage_id
```

---

`select('stage'): Promise<Stage | null>` [updater.ts:102]

- Types

```ts
number
```

- Usage

```js
match.stage_id
```

---

`select('group'): Promise<Group | null>` [updater.ts:105]

- Types

```ts
number
```

- Usage

```js
match.group_id
```

---

`select('stage'): Promise<Stage | null>` [updater.ts:131]

- Types

```ts
number
```

- Usage

```js
stored.stage_id
```

---

`select('match'): Promise<Match | null>` [update.ts:20]

- Types

```ts
number
```

- Usage

```js
match.id
```

---

`select('stage'): Promise<Stage | null>` [update.ts:54]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('round'): Promise<Round | null>` [update.ts:74]

- Types

```ts
number
```

- Usage

```js
roundId
```

---

`select('stage'): Promise<Stage | null>` [update.ts:77]

- Types

```ts
number
```

- Usage

```js
round.stage_id
```

---

`select('match'): Promise<Match | null>` [update.ts:104]

- Types

```ts
number
```

- Usage

```js
id
```

---

`select('match'): Promise<Match[] | null>` [update.ts:130]

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

`select('stage'): Promise<Stage | null>` [update.ts:136]

- Types

```ts
number
```

- Usage

```js
round.stage_id
```

---

`select('group'): Promise<Group | null>` [update.ts:140]

- Types

```ts
number
```

- Usage

```js
round.group_id
```

---

`select('match'): Promise<Match[] | null>` [update.ts:161]

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

`select('match'): Promise<Match[] | null>` [update.ts:178]

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

`select('match'): Promise<Match[] | null>` [update.ts:195]

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

`select('match_game'): Promise<MatchGame[] | null>` [update.ts:230]

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

`select('stage'): Promise<Stage | null>` [find.ts:13]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('stage'): Promise<Stage | null>` [find.ts:33]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('match'): Promise<Match | null>` [find.ts:56]

- Types

```ts
number
```

- Usage

```js
matchId
```

---

`select('stage'): Promise<Stage | null>` [find.ts:59]

- Types

```ts
number
```

- Usage

```js
match.stage_id
```

---

`select('group'): Promise<Group | null>` [find.ts:62]

- Types

```ts
number
```

- Usage

```js
match.group_id
```

---

`select('round'): Promise<Round | null>` [find.ts:65]

- Types

```ts
number
```

- Usage

```js
match.round_id
```

---

`select('match'): Promise<Match | null>` [find.ts:79]

- Types

```ts
number
```

- Usage

```js
matchId
```

---

`select('stage'): Promise<Stage | null>` [find.ts:82]

- Types

```ts
number
```

- Usage

```js
match.stage_id
```

---

`select('group'): Promise<Group | null>` [find.ts:85]

- Types

```ts
number
```

- Usage

```js
match.group_id
```

---

`select('match'): Promise<Match | null>` [reset.ts:15]

- Types

```ts
number
```

- Usage

```js
matchId
```

---

`select('stage'): Promise<Stage | null>` [reset.ts:21]

- Types

```ts
number
```

- Usage

```js
stored.stage_id
```

---

`select('group'): Promise<Group | null>` [reset.ts:24]

- Types

```ts
number
```

- Usage

```js
stored.group_id
```

---

`select('match_game'): Promise<MatchGame | null>` [reset.ts:47]

- Types

```ts
number
```

- Usage

```js
gameId
```

---

`select(table): Promise<DataTypes[T][] | null>` [manager.ts:33]

- Types

```ts
Partial<DataTypes[T]>
```

- Usage

```js
filter
```

---

`select(table): Promise<DataTypes[T][] | null>` [manager.ts:39]

- Types

```ts
Partial<DataTypes[T]>
```

- Usage

```js
filter
```

---

`select('participant'): Promise<Participant[] | null>` [manager.ts:104]

---

`select('stage'): Promise<Stage[] | null>` [manager.ts:107]

---

`select('group'): Promise<Group[] | null>` [manager.ts:110]

---

`select('round'): Promise<Round[] | null>` [manager.ts:113]

---

`select('match'): Promise<Match[] | null>` [manager.ts:116]

---

`select('participant'): Promise<Participant[] | null>` [create.ts:502]

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

`select('participant'): Promise<Participant[] | null>` [create.ts:515]

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

`select('stage'): Promise<Stage[] | null>` [create.ts:525]

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

`select('stage'): Promise<Stage | null>` [create.ts:655]

- Types

```ts
number
```

- Usage

```js
this.currentStageId
```

---

`select('participant'): Promise<Participant[] | null>` [create.ts:753]

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

`select('stage'): Promise<Stage | null>` [create.ts:834]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('round'): Promise<Round[] | null>` [getter.ts:50]

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

`select('round'): Promise<Round | null>` [getter.ts:70]

- Types

```ts
number
```

- Usage

```js
roundId
```

---

`select('round'): Promise<Round[] | null>` [getter.ts:73]

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

`select('match'): Promise<Match[] | null>` [getter.ts:377]

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

`select('match'): Promise<Match[] | null>` [getter.ts:380]

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

`select('match_game'): Promise<MatchGame | null>` [getter.ts:499]

- Types

```ts
number
```

- Usage

```js
game.id
```

---

`select('stage'): Promise<Stage | null>` [get.ts:14]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('group'): Promise<Group[] | null>` [get.ts:17]

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

`select('round'): Promise<Round[] | null>` [get.ts:20]

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

`select('match'): Promise<Match[] | null>` [get.ts:23]

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

`select('participant'): Promise<Participant[] | null>` [get.ts:26]

- Types

```ts
{
    tournament_id: number;
}
```

- Usage

```js
{ tournament_id: stage.tournament_id }
```

---

`select('match_game'): Promise<MatchGame[] | null>` [get.ts:49]

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

`select('stage'): Promise<Stage | null>` [get.ts:61]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('stage'): Promise<Stage | null>` [get.ts:76]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('match'): Promise<Match[] | null>` [get.ts:100]

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

`select('match'): Promise<Match[] | null>` [get.ts:127]

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

`select('stage'): Promise<Stage | null>` [updater.ts:18]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('match'): Promise<Match | null>` [updater.ts:53]

- Types

```ts
number
```

- Usage

```js
parentId
```

---

`select('match_game'): Promise<MatchGame[] | null>` [updater.ts:56]

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

`select('stage'): Promise<Stage | null>` [updater.ts:62]

- Types

```ts
number
```

- Usage

```js
storedParent.stage_id
```

---

`select('stage'): Promise<Stage | null>` [updater.ts:102]

- Types

```ts
number
```

- Usage

```js
match.stage_id
```

---

`select('group'): Promise<Group | null>` [updater.ts:105]

- Types

```ts
number
```

- Usage

```js
match.group_id
```

---

`select('stage'): Promise<Stage | null>` [updater.ts:131]

- Types

```ts
number
```

- Usage

```js
stored.stage_id
```

---

`select('match'): Promise<Match | null>` [update.ts:20]

- Types

```ts
number
```

- Usage

```js
match.id
```

---

`select('stage'): Promise<Stage | null>` [update.ts:54]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('round'): Promise<Round | null>` [update.ts:74]

- Types

```ts
number
```

- Usage

```js
roundId
```

---

`select('stage'): Promise<Stage | null>` [update.ts:77]

- Types

```ts
number
```

- Usage

```js
round.stage_id
```

---

`select('match'): Promise<Match | null>` [update.ts:104]

- Types

```ts
number
```

- Usage

```js
id
```

---

`select('match'): Promise<Match[] | null>` [update.ts:130]

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

`select('stage'): Promise<Stage | null>` [update.ts:136]

- Types

```ts
number
```

- Usage

```js
round.stage_id
```

---

`select('group'): Promise<Group | null>` [update.ts:140]

- Types

```ts
number
```

- Usage

```js
round.group_id
```

---

`select('match'): Promise<Match[] | null>` [update.ts:161]

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

`select('match'): Promise<Match[] | null>` [update.ts:178]

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

`select('match'): Promise<Match[] | null>` [update.ts:195]

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

`select('match_game'): Promise<MatchGame[] | null>` [update.ts:230]

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

`select('stage'): Promise<Stage | null>` [find.ts:13]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('stage'): Promise<Stage | null>` [find.ts:33]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('match'): Promise<Match | null>` [find.ts:56]

- Types

```ts
number
```

- Usage

```js
matchId
```

---

`select('stage'): Promise<Stage | null>` [find.ts:59]

- Types

```ts
number
```

- Usage

```js
match.stage_id
```

---

`select('group'): Promise<Group | null>` [find.ts:62]

- Types

```ts
number
```

- Usage

```js
match.group_id
```

---

`select('round'): Promise<Round | null>` [find.ts:65]

- Types

```ts
number
```

- Usage

```js
match.round_id
```

---

`select('match'): Promise<Match | null>` [find.ts:79]

- Types

```ts
number
```

- Usage

```js
matchId
```

---

`select('stage'): Promise<Stage | null>` [find.ts:82]

- Types

```ts
number
```

- Usage

```js
match.stage_id
```

---

`select('group'): Promise<Group | null>` [find.ts:85]

- Types

```ts
number
```

- Usage

```js
match.group_id
```

---

`select('match'): Promise<Match | null>` [reset.ts:15]

- Types

```ts
number
```

- Usage

```js
matchId
```

---

`select('stage'): Promise<Stage | null>` [reset.ts:21]

- Types

```ts
number
```

- Usage

```js
stored.stage_id
```

---

`select('group'): Promise<Group | null>` [reset.ts:24]

- Types

```ts
number
```

- Usage

```js
stored.group_id
```

---

`select('match_game'): Promise<MatchGame | null>` [reset.ts:47]

- Types

```ts
number
```

- Usage

```js
gameId
```

---

`select(table): Promise<DataTypes[T][] | null>` [manager.ts:33]

- Types

```ts
Partial<DataTypes[T]>
```

- Usage

```js
filter
```

---

`select(table): Promise<DataTypes[T][] | null>` [manager.ts:39]

- Types

```ts
Partial<DataTypes[T]>
```

- Usage

```js
filter
```

---

`select('participant'): Promise<Participant[] | null>` [manager.ts:104]

---

`select('stage'): Promise<Stage[] | null>` [manager.ts:107]

---

`select('group'): Promise<Group[] | null>` [manager.ts:110]

---

`select('round'): Promise<Round[] | null>` [manager.ts:113]

---

`select('match'): Promise<Match[] | null>` [manager.ts:116]

---

`select('participant'): Promise<Participant[] | null>` [create.ts:502]

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

`select('participant'): Promise<Participant[] | null>` [create.ts:515]

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

`select('stage'): Promise<Stage[] | null>` [create.ts:525]

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

`select('stage'): Promise<Stage | null>` [create.ts:655]

- Types

```ts
number
```

- Usage

```js
this.currentStageId
```

---

`select('participant'): Promise<Participant[] | null>` [create.ts:753]

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

`select('stage'): Promise<Stage | null>` [create.ts:834]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('round'): Promise<Round[] | null>` [getter.ts:50]

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

`select('round'): Promise<Round | null>` [getter.ts:70]

- Types

```ts
number
```

- Usage

```js
roundId
```

---

`select('round'): Promise<Round[] | null>` [getter.ts:73]

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

`select('match'): Promise<Match[] | null>` [getter.ts:377]

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

`select('match'): Promise<Match[] | null>` [getter.ts:380]

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

`select('match_game'): Promise<MatchGame | null>` [getter.ts:499]

- Types

```ts
number
```

- Usage

```js
game.id
```

---

`select('stage'): Promise<Stage | null>` [get.ts:14]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('group'): Promise<Group[] | null>` [get.ts:17]

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

`select('round'): Promise<Round[] | null>` [get.ts:20]

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

`select('match'): Promise<Match[] | null>` [get.ts:23]

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

`select('participant'): Promise<Participant[] | null>` [get.ts:26]

- Types

```ts
{
    tournament_id: number;
}
```

- Usage

```js
{ tournament_id: stage.tournament_id }
```

---

`select('match_game'): Promise<MatchGame[] | null>` [get.ts:49]

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

`select('stage'): Promise<Stage | null>` [get.ts:61]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('stage'): Promise<Stage | null>` [get.ts:76]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('match'): Promise<Match[] | null>` [get.ts:100]

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

`select('match'): Promise<Match[] | null>` [get.ts:127]

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

`select('stage'): Promise<Stage | null>` [updater.ts:18]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('match'): Promise<Match | null>` [updater.ts:53]

- Types

```ts
number
```

- Usage

```js
parentId
```

---

`select('match_game'): Promise<MatchGame[] | null>` [updater.ts:56]

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

`select('stage'): Promise<Stage | null>` [updater.ts:62]

- Types

```ts
number
```

- Usage

```js
storedParent.stage_id
```

---

`select('stage'): Promise<Stage | null>` [updater.ts:102]

- Types

```ts
number
```

- Usage

```js
match.stage_id
```

---

`select('group'): Promise<Group | null>` [updater.ts:105]

- Types

```ts
number
```

- Usage

```js
match.group_id
```

---

`select('stage'): Promise<Stage | null>` [updater.ts:131]

- Types

```ts
number
```

- Usage

```js
stored.stage_id
```

---

`select('match'): Promise<Match | null>` [update.ts:20]

- Types

```ts
number
```

- Usage

```js
match.id
```

---

`select('stage'): Promise<Stage | null>` [update.ts:54]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('round'): Promise<Round | null>` [update.ts:74]

- Types

```ts
number
```

- Usage

```js
roundId
```

---

`select('stage'): Promise<Stage | null>` [update.ts:77]

- Types

```ts
number
```

- Usage

```js
round.stage_id
```

---

`select('match'): Promise<Match | null>` [update.ts:104]

- Types

```ts
number
```

- Usage

```js
id
```

---

`select('match'): Promise<Match[] | null>` [update.ts:130]

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

`select('stage'): Promise<Stage | null>` [update.ts:136]

- Types

```ts
number
```

- Usage

```js
round.stage_id
```

---

`select('group'): Promise<Group | null>` [update.ts:140]

- Types

```ts
number
```

- Usage

```js
round.group_id
```

---

`select('match'): Promise<Match[] | null>` [update.ts:161]

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

`select('match'): Promise<Match[] | null>` [update.ts:178]

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

`select('match'): Promise<Match[] | null>` [update.ts:195]

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

`select('match_game'): Promise<MatchGame[] | null>` [update.ts:230]

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

`select('stage'): Promise<Stage | null>` [find.ts:13]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('stage'): Promise<Stage | null>` [find.ts:33]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`select('match'): Promise<Match | null>` [find.ts:56]

- Types

```ts
number
```

- Usage

```js
matchId
```

---

`select('stage'): Promise<Stage | null>` [find.ts:59]

- Types

```ts
number
```

- Usage

```js
match.stage_id
```

---

`select('group'): Promise<Group | null>` [find.ts:62]

- Types

```ts
number
```

- Usage

```js
match.group_id
```

---

`select('round'): Promise<Round | null>` [find.ts:65]

- Types

```ts
number
```

- Usage

```js
match.round_id
```

---

`select('match'): Promise<Match | null>` [find.ts:79]

- Types

```ts
number
```

- Usage

```js
matchId
```

---

`select('stage'): Promise<Stage | null>` [find.ts:82]

- Types

```ts
number
```

- Usage

```js
match.stage_id
```

---

`select('group'): Promise<Group | null>` [find.ts:85]

- Types

```ts
number
```

- Usage

```js
match.group_id
```

---

`select('match'): Promise<Match | null>` [reset.ts:15]

- Types

```ts
number
```

- Usage

```js
matchId
```

---

`select('stage'): Promise<Stage | null>` [reset.ts:21]

- Types

```ts
number
```

- Usage

```js
stored.stage_id
```

---

`select('group'): Promise<Group | null>` [reset.ts:24]

- Types

```ts
number
```

- Usage

```js
stored.group_id
```

---

`select('match_game'): Promise<MatchGame | null>` [reset.ts:47]

- Types

```ts
number
```

- Usage

```js
gameId
```

---

`select(table): Promise<DataTypes[T][] | null>` [manager.ts:33]

- Types

```ts
Partial<DataTypes[T]>
```

- Usage

```js
filter
```

---

`select(table): Promise<DataTypes[T][] | null>` [manager.ts:39]

- Types

```ts
Partial<DataTypes[T]>
```

- Usage

```js
filter
```

---

`select('participant'): Promise<Participant[] | null>` [manager.ts:104]

---

`select('stage'): Promise<Stage[] | null>` [manager.ts:107]

---

`select('group'): Promise<Group[] | null>` [manager.ts:110]

---

`select('round'): Promise<Round[] | null>` [manager.ts:113]

---

`select('match'): Promise<Match[] | null>` [manager.ts:116]

---

`select('participant'): Promise<Participant[] | null>` [create.ts:502]

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

`select('participant'): Promise<Participant[] | null>` [create.ts:515]

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

`select('stage'): Promise<Stage[] | null>` [create.ts:525]

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

`select('stage'): Promise<Stage | null>` [create.ts:655]

- Types

```ts
number
```

- Usage

```js
this.currentStageId
```

---

`select('participant'): Promise<Participant[] | null>` [create.ts:753]

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

`select('stage'): Promise<Stage | null>` [create.ts:834]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`update('match'): Promise<boolean>` [updater.ts:144]

- Types

```ts
number
```

- Usage

```js
match.id
```

---

`update('match_game'): Promise<boolean>` [updater.ts:159]

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

`update('match_game'): Promise<boolean>` [update.ts:41]

- Types

```ts
number
```

- Usage

```js
stored.id
```

---

`update('match'): Promise<boolean>` [update.ts:158]

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

`update('match'): Promise<boolean>` [update.ts:175]

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

`update('match'): Promise<boolean>` [update.ts:192]

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

`update('match'): Promise<boolean>` [update.ts:218]

- Types

```ts
number
```

- Usage

```js
updated.id
```

---

`update('match'): Promise<boolean>` [update.ts:261]

- Types

```ts
number
```

- Usage

```js
match.id
```

---

`update('match_game'): Promise<boolean>` [reset.ts:52]

- Types

```ts
number
```

- Usage

```js
stored.id
```

---

`update('match'): Promise<boolean>` [create.ts:716]

- Types

```ts
number
```

- Usage

```js
existing.id
```

---

`update('match_game'): Promise<boolean>` [create.ts:741]

- Types

```ts
number
```

- Usage

```js
existing.id
```

---

`update('stage'): Promise<boolean>` [create.ts:842]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`update('match'): Promise<boolean>` [updater.ts:144]

- Types

```ts
number
```

- Usage

```js
match.id
```

---

`update('match_game'): Promise<boolean>` [updater.ts:159]

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

`update('match_game'): Promise<boolean>` [update.ts:41]

- Types

```ts
number
```

- Usage

```js
stored.id
```

---

`update('match'): Promise<boolean>` [update.ts:158]

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

`update('match'): Promise<boolean>` [update.ts:175]

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

`update('match'): Promise<boolean>` [update.ts:192]

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

`update('match'): Promise<boolean>` [update.ts:218]

- Types

```ts
number
```

- Usage

```js
updated.id
```

---

`update('match'): Promise<boolean>` [update.ts:261]

- Types

```ts
number
```

- Usage

```js
match.id
```

---

`update('match_game'): Promise<boolean>` [reset.ts:52]

- Types

```ts
number
```

- Usage

```js
stored.id
```

---

`update('match'): Promise<boolean>` [create.ts:716]

- Types

```ts
number
```

- Usage

```js
existing.id
```

---

`update('match_game'): Promise<boolean>` [create.ts:741]

- Types

```ts
number
```

- Usage

```js
existing.id
```

---

`update('stage'): Promise<boolean>` [create.ts:842]

- Types

```ts
number
```

- Usage

```js
stageId
```

---

`delete('match_game'): Promise<boolean>` [update.ts:250]

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

`delete('match_game'): Promise<boolean>` [delete.ts:24]

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

`delete('match'): Promise<boolean>` [delete.ts:27]

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

`delete('round'): Promise<boolean>` [delete.ts:30]

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

`delete('group'): Promise<boolean>` [delete.ts:33]

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

`delete('stage'): Promise<boolean>` [delete.ts:36]

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

`delete('participant'): Promise<boolean>` [manager.ts:69]

---

`delete('stage'): Promise<boolean>` [manager.ts:74]

---

`delete('group'): Promise<boolean>` [manager.ts:79]

---

`delete('round'): Promise<boolean>` [manager.ts:84]

---

`delete('match'): Promise<boolean>` [manager.ts:89]

---

`delete('match_game'): Promise<boolean>` [manager.ts:94]

---

`delete('match_game'): Promise<boolean>` [update.ts:250]

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

`delete('match_game'): Promise<boolean>` [delete.ts:24]

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

`delete('match'): Promise<boolean>` [delete.ts:27]

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

`delete('round'): Promise<boolean>` [delete.ts:30]

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

`delete('group'): Promise<boolean>` [delete.ts:33]

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

`delete('stage'): Promise<boolean>` [delete.ts:36]

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

`delete('participant'): Promise<boolean>` [manager.ts:69]

---

`delete('stage'): Promise<boolean>` [manager.ts:74]

---

`delete('group'): Promise<boolean>` [manager.ts:79]

---

`delete('round'): Promise<boolean>` [manager.ts:84]

---

`delete('match'): Promise<boolean>` [manager.ts:89]

---

`delete('match_game'): Promise<boolean>` [manager.ts:94]

---

