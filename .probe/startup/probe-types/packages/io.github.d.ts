declare module "packages/io/github/pouffy/tcompat/compat/ice_and_fire/item/$ModifiableGlaiveItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ModifiableItem, $ModifiableItem$Type} from "packages/slimeknights/tconstruct/library/tools/item/$ModifiableItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModDataNBT, $ModDataNBT$Type} from "packages/slimeknights/tconstruct/library/tools/nbt/$ModDataNBT"
import {$ToolDefinition, $ToolDefinition$Type} from "packages/slimeknights/tconstruct/library/tools/definition/$ToolDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModifiableGlaiveItem extends $ModifiableItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $ToolDefinition$Type, arg2: integer)
constructor(arg0: $Item$Properties$Type, arg1: $ToolDefinition$Type)

public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public static "getDisplayStack"(arg0: $Item$Type): $ItemStack
public static "getDisplayStack"(arg0: $ItemStack$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public static "setRarity"(arg0: $ModDataNBT$Type, arg1: $Rarity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableGlaiveItem$Type = ($ModifiableGlaiveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableGlaiveItem_ = $ModifiableGlaiveItem$Type;
}}
