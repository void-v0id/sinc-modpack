declare module "packages/com/direwolf20/mininggadgets/client/particles/lightparticle/$LightParticleType" {
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"

export class $LightParticleType extends $SimpleParticleType {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightParticleType$Type = ($LightParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightParticleType_ = $LightParticleType$Type;
}}
declare module "packages/com/direwolf20/mininggadgets/common/blocks/$MinersLight" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $MinersLight extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinersLight$Type = ($MinersLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinersLight_ = $MinersLight$Type;
}}
declare module "packages/com/direwolf20/mininggadgets/common/blocks/$RenderBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $RenderBlock extends $Block implements $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBlock$Type = ($RenderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderBlock_ = $RenderBlock$Type;
}}
declare module "packages/com/direwolf20/mininggadgets/common/items/$UpgradeCard" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Upgrade, $Upgrade$Type} from "packages/com/direwolf20/mininggadgets/common/items/upgrade/$Upgrade"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeCard extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Upgrade$Type, arg1: integer)
constructor(arg0: $Upgrade$Type)

public "getUpgrade"(): $Upgrade
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "upgrade"(): $Upgrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeCard$Type = ($UpgradeCard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeCard_ = $UpgradeCard$Type;
}}
declare module "packages/com/direwolf20/mininggadgets/client/particles/laserparticle/$LaserParticleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $LaserParticleData implements $ParticleOptions {
readonly "size": float
readonly "maxAgeMul": float
readonly "depthTest": boolean
readonly "state": $BlockState
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($LaserParticleData)>


public static "laserparticle"(arg0: $BlockState$Type, arg1: float, arg2: float): $LaserParticleData
public static "laserparticle"(arg0: $BlockState$Type, arg1: float, arg2: float, arg3: boolean): $LaserParticleData
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "writeToString"(): string
public "getType"(): $ParticleType<($LaserParticleData)>
get "type"(): $ParticleType<($LaserParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserParticleData$Type = ($LaserParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaserParticleData_ = $LaserParticleData$Type;
}}
declare module "packages/com/direwolf20/mininggadgets/client/particles/playerparticle/$PlayerParticleType" {
import {$PlayerParticleData, $PlayerParticleData$Type} from "packages/com/direwolf20/mininggadgets/client/particles/playerparticle/$PlayerParticleData"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $PlayerParticleType extends $ParticleType<($PlayerParticleData)> {

constructor()

public "codec"(): $Codec<($PlayerParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerParticleType$Type = ($PlayerParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerParticleType_ = $PlayerParticleType$Type;
}}
declare module "packages/com/direwolf20/mininggadgets/common/blocks/$ModificationTable" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ModificationTable extends $Block implements $EntityBlock {
static "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModificationTable$Type = ($ModificationTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModificationTable_ = $ModificationTable$Type;
}}
declare module "packages/com/direwolf20/mininggadgets/common/items/upgrade/$Upgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $Upgrade extends $Enum<($Upgrade)> {
static readonly "EMPTY": $Upgrade
static readonly "SILK": $Upgrade
static readonly "VOID_JUNK": $Upgrade
static readonly "MAGNET": $Upgrade
static readonly "FREEZING": $Upgrade
static readonly "LIGHT_PLACER": $Upgrade
static readonly "SIZE_1": $Upgrade
static readonly "SIZE_2": $Upgrade
static readonly "SIZE_3": $Upgrade
static readonly "FORTUNE_1": $Upgrade
static readonly "FORTUNE_2": $Upgrade
static readonly "FORTUNE_3": $Upgrade
static readonly "BATTERY_1": $Upgrade
static readonly "BATTERY_2": $Upgrade
static readonly "BATTERY_3": $Upgrade
static readonly "BATTERY_CREATIVE": $Upgrade
static readonly "RANGE_1": $Upgrade
static readonly "RANGE_2": $Upgrade
static readonly "RANGE_3": $Upgrade
static readonly "EFFICIENCY_1": $Upgrade
static readonly "EFFICIENCY_2": $Upgrade
static readonly "EFFICIENCY_3": $Upgrade
static readonly "EFFICIENCY_4": $Upgrade
static readonly "EFFICIENCY_5": $Upgrade


public "getCostPerBlock"(): integer
public "getToolTip"(): string
public "getTier"(): integer
public "isEnabled"(): boolean
public "getLocal"(): string
public "getBaseName"(): string
public "setEnabled"(arg0: boolean): void
public "isToggleable"(): boolean
public "getCardItem"(): $RegistryObject<($Item)>
public "getLocalReplacement"(): string
public "hasTier"(): boolean
public "lazyIs"(arg0: $Upgrade$Type): boolean
public "getName"(): string
public static "values"(): ($Upgrade)[]
public static "valueOf"(arg0: string): $Upgrade
get "costPerBlock"(): integer
get "toolTip"(): string
get "tier"(): integer
get "enabled"(): boolean
get "local"(): string
get "baseName"(): string
set "enabled"(value: boolean)
get "toggleable"(): boolean
get "cardItem"(): $RegistryObject<($Item)>
get "localReplacement"(): string
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Upgrade$Type = (("silk") | ("battery_creative") | ("range_1") | ("size_3") | ("size_2") | ("magnet") | ("size_1") | ("battery_2") | ("empty") | ("battery_3") | ("fortune_1") | ("battery_1") | ("freezing") | ("fortune_3") | ("fortune_2") | ("efficiency_1") | ("range_2") | ("light_placer") | ("range_3") | ("efficiency_5") | ("efficiency_4") | ("void_junk") | ("efficiency_3") | ("efficiency_2")) | ($Upgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Upgrade_ = $Upgrade$Type;
}}
declare module "packages/com/direwolf20/mininggadgets/common/items/$MiningGadget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeCard, $UpgradeCard$Type} from "packages/com/direwolf20/mininggadgets/common/items/$UpgradeCard"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MiningGadget extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "getEnergyCost"(arg0: $ItemStack$Type): integer
public static "changeRange"(arg0: $ItemStack$Type): void
public static "canMineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type): boolean
public "findSources"(arg0: $Level$Type, arg1: $List$Type<($BlockPos$Type)>): $List<($BlockPos)>
public "playLoopSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public static "applyUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeCard$Type): void
public static "isHolding"(arg0: $Player$Type): boolean
public static "canMine"(arg0: $ItemStack$Type): boolean
public static "getGadget"(arg0: $Player$Type): $ItemStack
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "verifyTagAfterLoad"(arg0: $CompoundTag$Type): void
public "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MiningGadget$Type = ($MiningGadget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MiningGadget_ = $MiningGadget$Type;
}}
declare module "packages/com/direwolf20/mininggadgets/client/particles/laserparticle/$LaserParticleType" {
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$LaserParticleData, $LaserParticleData$Type} from "packages/com/direwolf20/mininggadgets/client/particles/laserparticle/$LaserParticleData"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LaserParticleType extends $ParticleType<($LaserParticleData)> {

constructor()

public "codec"(): $Codec<($LaserParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserParticleType$Type = ($LaserParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaserParticleType_ = $LaserParticleType$Type;
}}
declare module "packages/com/direwolf20/mininggadgets/client/particles/playerparticle/$PlayerParticleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $PlayerParticleData implements $ParticleOptions {
readonly "size": float
readonly "r": float
readonly "g": float
readonly "b": float
readonly "maxAgeMul": float
readonly "depthTest": boolean
readonly "targetX": double
readonly "targetY": double
readonly "targetZ": double
readonly "partType": string
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($PlayerParticleData)>


public static "playerparticle"(arg0: string, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: boolean): $PlayerParticleData
public static "playerparticle"(arg0: string, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: float, arg7: float, arg8: boolean): $PlayerParticleData
public static "playerparticle"(arg0: string, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float): $PlayerParticleData
public static "playerparticle"(arg0: string, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: float, arg7: float): $PlayerParticleData
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "writeToString"(): string
public "getType"(): $ParticleType<($PlayerParticleData)>
get "type"(): $ParticleType<($PlayerParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerParticleData$Type = ($PlayerParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerParticleData_ = $PlayerParticleData$Type;
}}
