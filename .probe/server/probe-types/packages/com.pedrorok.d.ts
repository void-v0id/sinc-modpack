declare module "packages/com/pedrorok/hypertube/blocks/$HypertubeBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$TubeBlock, $TubeBlock$Type} from "packages/com/pedrorok/hypertube/blocks/$TubeBlock"

export class $HypertubeBlock extends $TubeBlock implements $EntityBlock {
static readonly "CONNECTED": $BooleanProperty
static readonly "NORTH_SOUTH": $BooleanProperty
static readonly "EAST_WEST": $BooleanProperty
static readonly "UP_DOWN": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "SHAPE_NORTH_SOUTH": $VoxelShape
static readonly "SHAPE_EAST_WEST": $VoxelShape
static readonly "SHAPE_UP_DOWN": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getConnectedFaces"(arg0: $BlockState$Type): $List<($Direction)>
public "updateBlockStateFromEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "updateBlockState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $CollisionContext$Type): $VoxelShape
public "getItem"(): $Item
public "getState"(arg0: $BlockState$Type, arg1: $Collection$Type<($Direction$Type)>, arg2: boolean): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
get "item"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HypertubeBlock$Type = ($HypertubeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HypertubeBlock_ = $HypertubeBlock$Type;
}}
declare module "packages/com/pedrorok/hypertube/items/$HypertubeItem" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ResponseDTO, $ResponseDTO$Type} from "packages/com/pedrorok/hypertube/core/placement/$ResponseDTO"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HypertubeItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public static "clearConnection"(arg0: $ItemStack$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$Type): boolean
public static "select"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $ItemStack$Type): $ResponseDTO
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HypertubeItem$Type = ($HypertubeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HypertubeItem_ = $HypertubeItem$Type;
}}
declare module "packages/com/pedrorok/hypertube/core/connection/$BezierConnection" {
import {$SimpleConnection, $SimpleConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/$SimpleConnection"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/net/createmod/catnip/animation/$LerpedFloat"
import {$ResponseDTO, $ResponseDTO$Type} from "packages/com/pedrorok/hypertube/core/placement/$ResponseDTO"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IConnection, $IConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/interfaces/$IConnection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BezierConnection implements $IConnection {
static readonly "CODEC": $Codec<($BezierConnection)>
static readonly "MAX_DISTANCE": float
static readonly "MAX_ANGLE": float

constructor(arg0: $SimpleConnection$Type, arg1: $SimpleConnection$Type, arg2: integer, arg3: $List$Type<($Vec3$Type)>)
constructor(arg0: $SimpleConnection$Type, arg1: $SimpleConnection$Type)
constructor(arg0: $SimpleConnection$Type, arg1: $SimpleConnection$Type, arg2: integer, arg3: integer)

public "getMaxAngleBezierAngle"(): float
public "drawPath"(arg0: $LerpedFloat$Type, arg1: boolean): void
public "getRelativeBezierPoints"(arg0: $Level$Type, arg1: $BlockPos$Type): $List<($Vec3)>
public "getRelativeBezierPoints"(arg0: $BlockPos$Type): $List<($Vec3)>
public "getFromPos"(): $SimpleConnection
public "getThisEntranceConnection"(arg0: $Level$Type): $BezierConnection
public "getThisEntranceDirection"(arg0: $Level$Type): $Direction
public "isSameConnection"(arg0: $IConnection$Type): boolean
public "getThisConnection"(): $SimpleConnection
public "updateTubeSegments"(arg0: $Level$Type): void
public "getToPos"(): $SimpleConnection
public "getTubeSegments"(): integer
public "getCachedRelativeBezierPoints"(): $List<($Vec3)>
public "invert"(): $BezierConnection
public "getValidation"(): $ResponseDTO
public "getBezierPoints"(arg0: $Level$Type, arg1: $BlockPos$Type): $List<($Vec3)>
/**
 * 
 * @deprecated
 */
public "getBezierPoints"(): $List<($Vec3)>
public static "outlineBlocks"(arg0: $BlockPos$Type): void
public "getUuid"(): $UUID
public "toString"(): string
public static "of"(arg0: $SimpleConnection$Type, arg1: $SimpleConnection$Type): $BezierConnection
public static "line"(arg0: $UUID$Type, arg1: integer, arg2: $Vec3$Type, arg3: $Vec3$Type, arg4: $LerpedFloat$Type, arg5: boolean): void
public "distance"(): float
public static "getSameConnectionBlockPos"(arg0: $IConnection$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $SimpleConnection
get "maxAngleBezierAngle"(): float
get "fromPos"(): $SimpleConnection
get "thisConnection"(): $SimpleConnection
get "toPos"(): $SimpleConnection
get "tubeSegments"(): integer
get "cachedRelativeBezierPoints"(): $List<($Vec3)>
get "validation"(): $ResponseDTO
get "bezierPoints"(): $List<($Vec3)>
get "uuid"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BezierConnection$Type = ($BezierConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BezierConnection_ = $BezierConnection$Type;
}}
declare module "packages/com/pedrorok/hypertube/blocks/$TubeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ITubeConnection, $ITubeConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/interfaces/$ITubeConnection"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TubeBlock extends $KineticBlock implements $ITubeConnection, $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canTravelConnect"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getShape"(arg0: $BlockState$Type, arg1: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type): $VoxelShape
public "getItem"(): $Item
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getConnectedFaces"(arg0: $BlockState$Type): $List<($Direction)>
public "isConnected"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
get "item"(): $Item
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeBlock$Type = ($TubeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeBlock_ = $TubeBlock$Type;
}}
declare module "packages/com/pedrorok/hypertube/core/connection/interfaces/$ITubeConnection" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITubeConnection {

 "canTravelConnect"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "getConnectedFaces"(arg0: $BlockState$Type): $List<($Direction)>
 "isConnected"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
}

export namespace $ITubeConnection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITubeConnection$Type = ($ITubeConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITubeConnection_ = $ITubeConnection$Type;
}}
declare module "packages/com/pedrorok/hypertube/blocks/$HyperEntranceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ICogWheel, $ICogWheel$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ICogWheel"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ActionTubeBlock, $ActionTubeBlock$Type} from "packages/com/pedrorok/hypertube/blocks/$ActionTubeBlock"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $HyperEntranceBlock extends $ActionTubeBlock implements $EntityBlock, $ICogWheel {
static readonly "OPEN": $BooleanProperty
static readonly "LOCKED": $BooleanProperty
static readonly "IN_FRONT": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "POWER": $IntegerProperty
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "updateInFrontProperty"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "isSmallCog"(): boolean
public "canTravelConnect"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "getConnectedFaces"(arg0: $BlockState$Type): $List<($Direction)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getShape"(arg0: $BlockState$Type, arg1: $CollisionContext$Type): $VoxelShape
public "getItem"(): $Item
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public "isLargeCog"(): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public "isDedicatedCogWheel"(): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
get "smallCog"(): boolean
get "item"(): $Item
get "largeCog"(): boolean
get "dedicatedCogWheel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HyperEntranceBlock$Type = ($HyperEntranceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HyperEntranceBlock_ = $HyperEntranceBlock$Type;
}}
declare module "packages/com/pedrorok/hypertube/blocks/$ActionTubeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$TubeBlock, $TubeBlock$Type} from "packages/com/pedrorok/hypertube/blocks/$TubeBlock"

export class $ActionTubeBlock extends $TubeBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWER": $IntegerProperty
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "hasSignalOnSide"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public static "canPlaceAttachment"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionTubeBlock$Type = ($ActionTubeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionTubeBlock_ = $ActionTubeBlock$Type;
}}
declare module "packages/com/pedrorok/hypertube/blocks/blockentities/$ActionTubeBlockEntity" {
import {$TubeBlockEntity, $TubeBlockEntity$Type} from "packages/com/pedrorok/hypertube/blocks/blockentities/$TubeBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$TravelPathMover, $TravelPathMover$Type} from "packages/com/pedrorok/hypertube/core/travel/$TravelPathMover"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ITubeAttachment, $ITubeAttachment$Type} from "packages/com/pedrorok/hypertube/core/smarttube/$ITubeAttachment"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ActionTubeBlockEntity extends $TubeBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "hasTubeAttachment"(arg0: $Direction$Type): boolean
public "canEmitTo"(arg0: $Direction$Type): boolean
public "getAttachmentDirections"(): $Set<($Direction)>
public "getAttachmentDirectionsNoEmit"(): $List<($Direction)>
public "getTubeAttachments"(): $Map<($Direction), ($ITubeAttachment)>
public "removeTubeAttachment"(arg0: $Direction$Type): $ITubeAttachment
public "addTubeAttachment"(arg0: $Direction$Type, arg1: $ITubeAttachment$Type): void
public "activateAllTubeAttachments"(arg0: $LivingEntity$Type, arg1: $TravelPathMover$Type, arg2: $BlockPos$Type): void
public "getTubeAttachment"(arg0: $Direction$Type): $ITubeAttachment
public "hasAnyTubeAttachment"(): boolean
public "remove"(): void
get "attachmentDirections"(): $Set<($Direction)>
get "attachmentDirectionsNoEmit"(): $List<($Direction)>
get "tubeAttachments"(): $Map<($Direction), ($ITubeAttachment)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionTubeBlockEntity$Type = ($ActionTubeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionTubeBlockEntity_ = $ActionTubeBlockEntity$Type;
}}
declare module "packages/com/pedrorok/hypertube/core/smarttube/$ITubeAttachment" {
import {$ActionTubeBlockEntity, $ActionTubeBlockEntity$Type} from "packages/com/pedrorok/hypertube/blocks/blockentities/$ActionTubeBlockEntity"
import {$ITubeActionPoint, $ITubeActionPoint$Type} from "packages/com/pedrorok/hypertube/core/connection/interfaces/$ITubeActionPoint"
import {$PartialModel, $PartialModel$Type} from "packages/dev/engine_room/flywheel/lib/model/baked/$PartialModel"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ITubeAttachment {

 "getActionPoint"(arg0: $Direction$Type): $ITubeActionPoint
 "emitRedstoneSignal"(): boolean
 "getPartialModel"(arg0: $BlockState$Type, arg1: $ActionTubeBlockEntity$Type, arg2: $Direction$Type): $PartialModel
 "getItemStack"(): $ItemStack
 "getId"(): string
}

export namespace $ITubeAttachment {
const REGISTRY: $Map<(string), ($ITubeAttachment)>
function get(arg0: string): $ITubeAttachment
function register(arg0: $ITubeAttachment$Type): void
function init(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITubeAttachment$Type = ($ITubeAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITubeAttachment_ = $ITubeAttachment$Type;
}}
declare module "packages/com/pedrorok/hypertube/items/$TubeAttachmentItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ITubeAttachment, $ITubeAttachment$Type} from "packages/com/pedrorok/hypertube/core/smarttube/$ITubeAttachment"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TubeAttachmentItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: string, arg1: $Item$Properties$Type)

public "getTubeAttachment"(): $ITubeAttachment
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
get "tubeAttachment"(): $ITubeAttachment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeAttachmentItem$Type = ($TubeAttachmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeAttachmentItem_ = $TubeAttachmentItem$Type;
}}
declare module "packages/com/pedrorok/hypertube/core/placement/$ResponseDTO" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $ResponseDTO extends $Record {

constructor(valid: boolean, errorMessage: string)

public "getMessageComponent"(): $MutableComponent
public static "invalid"(arg0: string): $ResponseDTO
public static "invalid"(): $ResponseDTO
public "valid"(): boolean
public "errorMessage"(): string
public static "get"(arg0: boolean): $ResponseDTO
public static "get"(arg0: boolean, arg1: string): $ResponseDTO
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
get "messageComponent"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResponseDTO$Type = ($ResponseDTO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResponseDTO_ = $ResponseDTO$Type;
}}
declare module "packages/com/pedrorok/hypertube/core/connection/$SimpleConnection" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IConnection, $IConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/interfaces/$IConnection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BezierConnection, $BezierConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/$BezierConnection"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SimpleConnection extends $Record implements $IConnection {
static readonly "CODEC": $Codec<($SimpleConnection)>

constructor(pos: $BlockPos$Type, direction: $Direction$Type)

public "getThisEntranceConnection"(arg0: $Level$Type): $BezierConnection
public "getThisEntranceDirection"(arg0: $Level$Type): $Direction
public "isSameConnection"(arg0: $IConnection$Type): boolean
public "getThisConnection"(): $SimpleConnection
public "updateTubeSegments"(arg0: $Level$Type): void
public "direction"(): $Direction
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
public static "getSameConnectionBlockPos"(arg0: $IConnection$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $SimpleConnection
get "thisConnection"(): $SimpleConnection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleConnection$Type = ($SimpleConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleConnection_ = $SimpleConnection$Type;
}}
declare module "packages/com/pedrorok/hypertube/core/connection/interfaces/$ITubeActionPoint" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TravelPathMover, $TravelPathMover$Type} from "packages/com/pedrorok/hypertube/core/travel/$TravelPathMover"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ITubeActionPoint {

 "handleTravelPath"(arg0: $LivingEntity$Type, arg1: $TravelPathMover$Type, arg2: $BlockPos$Type): void

(arg0: $LivingEntity$Type, arg1: $TravelPathMover$Type, arg2: $BlockPos$Type): void
}

export namespace $ITubeActionPoint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITubeActionPoint$Type = ($ITubeActionPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITubeActionPoint_ = $ITubeActionPoint$Type;
}}
declare module "packages/com/pedrorok/hypertube/blocks/blockentities/$TubeBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$SimpleConnection, $SimpleConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/$SimpleConnection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITubeConnectionEntity, $ITubeConnectionEntity$Type} from "packages/com/pedrorok/hypertube/core/connection/interfaces/$ITubeConnectionEntity"
import {$IConnection, $IConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/interfaces/$IConnection"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $TubeBlockEntity extends $KineticBlockEntity implements $ITubeConnectionEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "blockBroken"(): integer
public "getFacesConnectable"(): $List<($Direction)>
public "hasConnectionAvailable"(): boolean
public "getConnectionDirection"(arg0: $Direction$Type, arg1: $IConnection$Type): boolean
public "getConnectionInDirection"(arg0: $Direction$Type): $IConnection
public "getThisConnectionFrom"(arg0: $SimpleConnection$Type): $IConnection
public "getExitDirection"(): $Vec3
public "getRenderBoundingBox"(): $AABB
public "sync"(): void
public "isConnected"(): boolean
public "blockBroken"(arg0: $Level$Type, arg1: $IConnection$Type, arg2: $BlockPos$Type): integer
public "setConnection"(arg0: $IConnection$Type, arg1: $Direction$Type): void
public "wrenchClicked"(arg0: $Direction$Type): boolean
public "writeConnection"(arg0: $CompoundTag$Type, ...arg1: ($Tuple$Type<($IConnection$Type), (string)>)[]): void
public "getConnectionRelative"(arg0: $CompoundTag$Type, arg1: string, arg2: $BlockPos$Type): $IConnection
public "writeConnectionRelative"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type, ...arg2: ($Tuple$Type<($IConnection$Type), (string)>)[]): void
public "writeConnectionRelativeSingle"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type, arg2: $IConnection$Type, arg3: string): void
public "clearConnection"(arg0: $IConnection$Type): void
public "getConnection"(arg0: $CompoundTag$Type, arg1: string): $IConnection
public "getConnections"(): $List<($IConnection)>
get "facesConnectable"(): $List<($Direction)>
get "exitDirection"(): $Vec3
get "renderBoundingBox"(): $AABB
get "connected"(): boolean
get "connections"(): $List<($IConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeBlockEntity$Type = ($TubeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeBlockEntity_ = $TubeBlockEntity$Type;
}}
declare module "packages/com/pedrorok/hypertube/core/connection/interfaces/$IConnection" {
import {$SimpleConnection, $SimpleConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/$SimpleConnection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BezierConnection, $BezierConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/$BezierConnection"

export interface $IConnection {

 "getThisEntranceConnection"(arg0: $Level$Type): $BezierConnection
 "getThisEntranceDirection"(arg0: $Level$Type): $Direction
 "isSameConnection"(arg0: $IConnection$Type): boolean
 "getThisConnection"(): $SimpleConnection
 "updateTubeSegments"(arg0: $Level$Type): void
}

export namespace $IConnection {
function getSameConnectionBlockPos(arg0: $IConnection$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $SimpleConnection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnection$Type = ($IConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConnection_ = $IConnection$Type;
}}
declare module "packages/com/pedrorok/hypertube/core/connection/interfaces/$ITubeConnectionEntity" {
import {$SimpleConnection, $SimpleConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/$SimpleConnection"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IConnection, $IConnection$Type} from "packages/com/pedrorok/hypertube/core/connection/interfaces/$IConnection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITubeConnectionEntity {

 "blockBroken"(): integer
 "blockBroken"(arg0: $Level$Type, arg1: $IConnection$Type, arg2: $BlockPos$Type): integer
 "getFacesConnectable"(): $List<($Direction)>
 "hasConnectionAvailable"(): boolean
 "setConnection"(arg0: $IConnection$Type, arg1: $Direction$Type): void
 "wrenchClicked"(arg0: $Direction$Type): boolean
 "getConnectionInDirection"(arg0: $Direction$Type): $IConnection
 "getThisConnectionFrom"(arg0: $SimpleConnection$Type): $IConnection
 "getExitDirection"(): $Vec3
 "writeConnection"(arg0: $CompoundTag$Type, ...arg1: ($Tuple$Type<($IConnection$Type), (string)>)[]): void
 "getConnectionRelative"(arg0: $CompoundTag$Type, arg1: string, arg2: $BlockPos$Type): $IConnection
 "writeConnectionRelative"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type, ...arg2: ($Tuple$Type<($IConnection$Type), (string)>)[]): void
 "writeConnectionRelativeSingle"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type, arg2: $IConnection$Type, arg3: string): void
 "clearConnection"(arg0: $IConnection$Type): void
 "getConnection"(arg0: $CompoundTag$Type, arg1: string): $IConnection
 "getConnections"(): $List<($IConnection)>
 "isConnected"(): boolean
}

export namespace $ITubeConnectionEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITubeConnectionEntity$Type = ($ITubeConnectionEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITubeConnectionEntity_ = $ITubeConnectionEntity$Type;
}}
declare module "packages/com/pedrorok/hypertube/core/travel/$TravelPathMover" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TravelPathMover {

constructor(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $List$Type<($Vec3$Type)>, arg3: $Set$Type<($BlockPos$Type)>, arg4: float, arg5: $Vec3$Type, arg6: $BlockPos$Type, arg7: $BiConsumer$Type<($LivingEntity$Type), (boolean)>)

public "handleActionPoint"(arg0: $BlockPos$Type): void
public "getTravelSpeed"(): float
public "setTravelSpeed"(arg0: float): void
public "getLastDir"(): $Vec3
public "setClientFinish"(): void
public "getLastPos"(): $BlockPos
public "tickEntity"(arg0: $LivingEntity$Type): void
get "travelSpeed"(): float
set "travelSpeed"(value: float)
get "lastDir"(): $Vec3
get "lastPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelPathMover$Type = ($TravelPathMover);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelPathMover_ = $TravelPathMover$Type;
}}
declare module "packages/com/pedrorok/hypertube/mixin/core/$CameraAccessorMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraAccessorMixin {

 "callSetRotation"(arg0: float, arg1: float): void
 "callSetPosition"(arg0: double, arg1: double, arg2: double): void
 "callGetMaxZoom"(arg0: double): double
 "callMove"(arg0: double, arg1: double, arg2: double): void
}

export namespace $CameraAccessorMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraAccessorMixin$Type = ($CameraAccessorMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraAccessorMixin_ = $CameraAccessorMixin$Type;
}}
declare module "packages/com/pedrorok/hypertube/blocks/$HyperAcceleratorBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ICogWheel, $ICogWheel$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ICogWheel"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ActionTubeBlock, $ActionTubeBlock$Type} from "packages/com/pedrorok/hypertube/blocks/$ActionTubeBlock"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$TravelPathMover, $TravelPathMover$Type} from "packages/com/pedrorok/hypertube/core/travel/$TravelPathMover"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ITubeActionPoint, $ITubeActionPoint$Type} from "packages/com/pedrorok/hypertube/core/connection/interfaces/$ITubeActionPoint"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $HyperAcceleratorBlock extends $ActionTubeBlock implements $EntityBlock, $ICogWheel, $ITubeActionPoint {
static readonly "OPEN": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "ACCELERATE": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "POWER": $IntegerProperty
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isSmallCog"(): boolean
public "getConnectedFaces"(arg0: $BlockState$Type): $List<($Direction)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "handleTravelPath"(arg0: $LivingEntity$Type, arg1: $TravelPathMover$Type, arg2: $BlockPos$Type): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getShape"(arg0: $BlockState$Type, arg1: $CollisionContext$Type): $VoxelShape
public "getItem"(): $Item
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public "isLargeCog"(): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public "isDedicatedCogWheel"(): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
get "smallCog"(): boolean
get "item"(): $Item
get "largeCog"(): boolean
get "dedicatedCogWheel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HyperAcceleratorBlock$Type = ($HyperAcceleratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HyperAcceleratorBlock_ = $HyperAcceleratorBlock$Type;
}}
