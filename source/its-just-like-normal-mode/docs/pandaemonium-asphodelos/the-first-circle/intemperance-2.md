---
id: p1s-intemperance-2
title: Second Intemperance Phase
slug: /pandaemonium-asphodelos/the-first-circle/intemperance-2
description: How our static handles the second intemperance phase of Pandaemonium Asphodelos The First Circle (Savage)
keywords: 
  - final fantasy xiv
  - ffxiv
  - ff14
  - endwalker
  - static
  - raid
  - guide
  - p1s
  - pandaemonium asphodelos
  - the first circle
  - savage
  - intemperance
---


# Second Intemperance Phase
*There are two phases in this fight where Intemperance is used. This document is for the second time. If you are looking for the first Intemperance phase, see the [First Intemerpance Phase](./intemperance-1.md) documentation*

## Phase Description

<!-- <details> -->
<!-- <summary>Click to expand this section!</summary> -->

### Intemperance
When the boss uses Intemperance, the entire stage will transform and be divided into a 3x3 grid with a total of 9 squares.  Additionaly, every square, except the middle, will have 3 Aetherial Gems in them that, when explode, either must be soaked by a party member or avoided due to lethal damage, depending on the color/type of Aetherial Gem.

![Aetherial Gems](/img/pandaemonium-asphodelos/the-first-circle/intemperance-aetherial-gems.webp)

As shown in the image above, each gem has a different effect that it has on a party member. The Fire and Ice gems, when exploding, must be soaked by at minimum one party member, and will apply either the ![Hot Spell](/img/icons/debuffs/hot-spell.webp)**Hot Spell** or ![Cold Spell](/img/icons/debuffs/cold-spell.webp)**Cold Spell**  debuff depending on if you soak fire or ice respectivly.  **You must alternate the debuff.  For example, if the first one you receive is Hot Spell, then the next one you receive must be Cold Spell from an Ice Cube**.  Additionally, the Void gem must **not** be soaked by anyone.  And if that wasn't complex enough, there's also 3 different variations that the gems will spawn in.

3 gems per 8 squares with 3 variations = 72 possible solves? *(bad math used for dramatic effect, it's actually not that complicatd)*.

### Intemperate Torment
After the boss spawns the gems, he will then start casting **Intemperate Tormet**. While he's casting this, he will hold his hand either up high or down low to the groud.  This visual indication is very important as it signifies how the Aetherial Gem stacks will resolve.

- If his hand is held up high, the gems will resolve from **top to bottom** in each stack.
- If his hand is held down low on the groud, the gems will resolve from **bottom to top** in each stack.

As soon as Intemperate Torment is casted, the first Aetherial Gem in each square will explode.  To handle this, we have all party members move to the square that is at the [clock positions](./index.md#clock-positions) that we setup before starting the fight. This ensures that every Aetherial Gem is soaked by the minimum one person requirement and gives everyone their initial Hot/Cold Spell debuffs.  Every individuals clock position for the rest of this document will be refered to as their **Home** position.

:::danger
Every time an Aetherial Gem explodes, the dark lines on the arena that separate each square will also explode.  Do not stand in the dark lines, they will deal heavy hitting, if not lethal, damage to any player standing in them **when they explode**.  It is safe to walk over them when they're not exploding.
:::

### Gaoler's Flail
During the second intemperance phase, the boss will be using [Gaoler's Flail](./gaolers-flail.md) instead of Warder's Wrath like he did during the first Intemperance phase.  It's important to know the timing of the flails in relation to the Aetherial Gems exploding. After the first Aetherial Gems explode, the boss will begin to cast Gaoler's Flail.  After dropping both weapons on the ground beside him (about 1/2 into the cast bar), this is when the second Aetherial Gems explode.  Next, he finishes his cast of Gaoler's Flail and you must dodge both flails, and then move into position for the final Aetherial Gem explosions.

:::info
The Gaoler's Flail in this phase will always be either **In then Out** or **Out then In**.  He does not use the sickle flails during this phase.
:::

<!-- </details> -->


## Phase Order of Events
<!-- <details> -->
<!-- <summary>Click to expand/collapse this section</summary> -->
It is important to understand the order of events for this phase before we begin to discuss the strategy for handling it.  Below is the order of events along with how much time is in between each part

| Start | Cast/Effect Applies | Mechanic |
|-------|---------------------|----------|
| 00:00 | 00:01 | Intemperance |
| 00:08 | 00:19 | Intemparate Torment (first Aetherial Gems explods) |
| 00:22 | -     | Gaoler's Flail begins casting |
| 00:25 | 00:30 | Second Aetherial Gems explode |
| -     | 00:33 | 1st flail resolves (either in or out)
| -     | 00:36 | 2nd flail resolves (either in or out)
| 00:36 | 00:41 | Third Aetherial Gems explode |


<!-- </details> -->

## Phase Guide
On paper, this phase can look quite complicated. Each party member has to manage resolving their squares and debuffs in a specific way to ensure that all Fire and Ice gems are soaked and Void gems are avoided. Add in that there are three different variations to how they spawn and that party members may have to resolve their Hot/Cold Spell debuffs on different squares than the one they start on, and it starts to sound even more complicated.  However, there is actually a very simple solution to all of this depending on which variation happens.

Our static uses whats called the **2-man adjust** strat.  With this strat, no matter what Gem variation happens, only **2 party members have to actually adjust** meaning the rest of the part can resolve their gems/debuffs as usual.  This keeps it simple and reduces the chance of mistakes happening that could cause the party to wipe.

### Who Is Adjusting?
First, the party needs to determine which DPS will be the adjuster.  For our static, and for the examples provided below in this document, we always use the DPS that is in the **North East** square, who is typically the physical ranged DPS.  The second party member in this *2-man* setup is the current tank, who will be taking the **North Center** square.

Now that we know who is doing the adjsuting, let's go over how to identify which variation is being used.

### Identifying the Variations
Like I've mentioned before, there are only 3 variations to the Aetherial Gem spawns. Identifying the variations is simple. First, look at the Aetherial Gems that spawn on the **South Center** square. Then:

- If it is 3 Aetherial Ice Gems, this is the **Three Ice Variation**.
- If it is 2 Aetherial Ice and 1 Aetherial Fire Gem, this is the **2-man Adjust Variation**


![Identifying Variations](/img/pandaemonium-asphodelos/the-first-circle/intemperance-identifying-variations.webp)

You may be asking "*Kanae, you said there were three variations, but only show two!*".  That's correct. That's becuase the **2-man adjust Variation** has two ways of handling it depending on if the Aetherial Gems are exploding from top to bottom or bottom to top. The important thing here is that you recognize if it's Three Ice or 2-man Adjust.  Now that we can identify the variations, let's go over how to do them. This is broken down into the two sections below

### Three Ice Variation
<!-- <details> -->
<!-- <summary>Click to expand/collapse this section</summary> -->

The **Three Ice Variation** is the easiest one.  For this one, it **does not matter if the Aetherial Gems are exploding from top to bottom or bottom to top.** This immediatly removes some complexity. The following table outline the movements needed to resolve all Aetherial Gems for every individual based on their roles

| Role             | First Gem | Second Gem | Third Gem |
|------------------|-----------|------------|-----------|
| **Current Tank** | Home      | Home       | Home      |
| **Off Tank**     | Home      | North      | Home      |
| **Healers**      | Home      | Center     | Home      |
| **DPS**          | Home      | South      | Home      |

![Three Ice Variation Step One](/img/pandaemonium-asphodelos/the-first-circle/intemperance-three-ice-step-one.webp)

![Three Ice Variation Step Two](/img/pandaemonium-asphodelos/the-first-circle/intemperance-three-ice-step-two.webp)

![Three Ice Variation Step Three](/img/pandaemonium-asphodelos/the-first-circle/intemperance-three-ice-step-three.webp)


<!-- </details> -->

### 2-Man Adjust Variation
This is called the **2-Man Adjust** because it requires only 2 party members to adjust and not end up on their home position for the final Aetherial Gem explosions.  How they adjust however depends on if the Aetherial Gems are exploding from top to bottom, or from bottom to top.  For both variations we will designate the **North East DPS and the North Tank** as the adjusters. Both variations of this are covered  below.

### 2-Man Adjust Top-To-Bottom

<!-- <details> -->
<!-- <summary>Click to expand/collapse this section</summary> -->

For the **top-to-bottom** variation, the following table outlines the movements needed to resolve all Aetherial Gems for every individual based on their roles.

|                     | First Gem | Second Gem | Third Gem  |
|---------------------|-----------|------------|------------|
| ⭐ **North Tank**      | Home      | Home       | North East |
| ⭐ **North East DPS**  | Home      | South      | South      |
| **South Tank**         | Home      | Center     | Home       |
| **Healers**            | Home      | South      | Home       |
| **All Other DPS**      | Home      | Center     | Home       |

![2-Man Adjust Top To Bottom Step One](/img/pandaemonium-asphodelos/the-first-circle/intemperance-adjust-top-bottom-step-one.webp)

![2-Man Adjust Top To Bottom Step Two](/img/pandaemonium-asphodelos/the-first-circle/intemperance-adjust-top-bottom-step-two.webp)

![2-Man Adjust Top To Bottom Step Three](/img/pandaemonium-asphodelos/the-first-circle/intemperance-adjust-top-bottom-step-three.webp)

<!-- </details> -->

### 2-Man Adjust Bottom-To-Top

<!-- <details> -->
<!-- <summary>Click to expand/collapse this section</summary> -->

For the **bottom-to-top** variation, the following table outlines the movements needed to resolve all Aetherial Gems for every individual based on their roles.

| Role                           | First Gem | Second Gem | Third Gem  |
|--------------------------------|-----------|------------|------------|
| ⭐ **North Tank**              | Home      | South      | North East |
| ⭐ **North East DPS**          | Home      | North      | North      |
| **South Tank**                 | Home      | Center     | Home       |
| **Healers**                    | Home      | South      | Home       |
| **All Other DPS**              | Home      | Center     | Home       |

![2-Man Adjust Bottom To Top Step One](/img/pandaemonium-asphodelos/the-first-circle/intemperance-adjust-bottom-to-top-step-one.webp)

![2-Man Adjust Bottom To Top Step Two](/img/pandaemonium-asphodelos/the-first-circle/intemperance-adjust-bottom-to-top-step-two.webp)

![2-Man Adjust Bottom To Top Step Three](/img/pandaemonium-asphodelos/the-first-circle/intemperance-adjust-bottom-to-top-step-three.webp)

<!-- </details> -->


## Example Video
The following example video shows the second intemperance phase with the Triple Ice variation.  This is from my POV as the healer on the east side of the room.

<iframe src="https://player.twitch.tv/?video=1272753172&parent=localhost&parent=manbeardgames.com&autoplay=false" 
    frameBorder="0" 
    allowFullScreen={true} 
    scrolling="no" 
    height="378" 
    width="620"></iframe>

## Additional References
Joonbob has a great video that covers resolving this mechanic if you prefer to watch a video instead. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/PRfW76lGu8U" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::caution
His video has a typo that is mentioned in the description.  During the Bottom-To-Top section of the video (at 1:04), the OT should read **Home > Home SE**.  The animation that plays is correct, just the text is incorrect
:::