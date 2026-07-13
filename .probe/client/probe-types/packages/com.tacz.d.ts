declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$RenderLevelBobHurtEventJS" {
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$RenderLevelBobEvent$BobHurt, $RenderLevelBobEvent$BobHurt$Type} from "packages/com/tacz/guns/api/client/event/$RenderLevelBobEvent$BobHurt"

export class $GunKubeJSEvents$RenderLevelBobHurtEventJS extends $GunKubeJSEvents$GunEventJS<($RenderLevelBobEvent$BobHurt)> {

constructor(arg0: $RenderLevelBobEvent$BobHurt$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$RenderLevelBobHurtEventJS$Type = ($GunKubeJSEvents$RenderLevelBobHurtEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$RenderLevelBobHurtEventJS_ = $GunKubeJSEvents$RenderLevelBobHurtEventJS$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/util/$TimelessItemWrapper" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AmmoNbtFactory, $AmmoNbtFactory$Type} from "packages/com/tacz/guns/compat/kubejs/util/$AmmoNbtFactory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AttachmentItemBuilder, $AttachmentItemBuilder$Type} from "packages/com/tacz/guns/api/item/builder/$AttachmentItemBuilder"
import {$AttachmentNbtFactory, $AttachmentNbtFactory$Type} from "packages/com/tacz/guns/compat/kubejs/util/$AttachmentNbtFactory"
import {$AmmoItemBuilder, $AmmoItemBuilder$Type} from "packages/com/tacz/guns/api/item/builder/$AmmoItemBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GunNbtFactory, $GunNbtFactory$Type} from "packages/com/tacz/guns/compat/kubejs/util/$GunNbtFactory"
import {$BlockItemBuilder, $BlockItemBuilder$Type} from "packages/com/tacz/guns/api/item/builder/$BlockItemBuilder"

export class $TimelessItemWrapper {

constructor()

public static "gunItem"(arg0: $Item$Type, arg1: $Consumer$Type<($GunNbtFactory$Type)>): $ItemStack
public static "gunItem"(arg0: $Consumer$Type<($GunNbtFactory$Type)>): $ItemStack
public static "attachmentItem"(arg0: $Item$Type, arg1: $Consumer$Type<($AttachmentNbtFactory$Type)>): $ItemStack
public static "attachmentItem"(arg0: $Consumer$Type<($AttachmentItemBuilder$Type)>): $ItemStack
public static "ammoItem"(arg0: $Item$Type, arg1: $Consumer$Type<($AmmoNbtFactory$Type)>): $ItemStack
public static "ammoItem"(arg0: $Consumer$Type<($AmmoItemBuilder$Type)>): $ItemStack
public static "blockItem"(arg0: $ItemLike$Type, arg1: $Consumer$Type<($BlockItemBuilder$Type)>): $ItemStack
public static "of"(arg0: $ResourceLocation$Type): $ItemStack
public static "of"(arg0: $Item$Type, arg1: $ResourceLocation$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessItemWrapper$Type = ($TimelessItemWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessItemWrapper_ = $TimelessItemWrapper$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/util/$GunNbtFactory" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$AbstractGunItem, $AbstractGunItem$Type} from "packages/com/tacz/guns/api/item/gun/$AbstractGunItem"
import {$TimelessItemNbtFactory, $TimelessItemNbtFactory$Type} from "packages/com/tacz/guns/compat/kubejs/util/$TimelessItemNbtFactory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $GunNbtFactory extends $TimelessItemNbtFactory<($AbstractGunItem), ($GunNbtFactory)> {

constructor()
constructor(arg0: $AbstractGunItem$Type)

public "putAllAttachment"(arg0: $EnumMap$Type<($AttachmentType$Type), ($ResourceLocation$Type)>): $GunNbtFactory
public "setAmmoCount"(arg0: integer): $GunNbtFactory
public "setFireMode"(arg0: $FireMode$Type): $GunNbtFactory
public "setBulletInBarrel"(arg0: boolean): $GunNbtFactory
public "putAttachment"(arg0: $AttachmentType$Type, arg1: $ResourceLocation$Type): $GunNbtFactory
public "build"(): $ItemStack
set "ammoCount"(value: integer)
set "fireMode"(value: $FireMode$Type)
set "bulletInBarrel"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunNbtFactory$Type = ($GunNbtFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunNbtFactory_ = $GunNbtFactory$Type;
}}
declare module "packages/com/tacz/guns/mixin/client/$StairBlockAccessor" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $StairBlockAccessor {

 "invokeGetModelBlock"(): $Block

(): $Block
}

export namespace $StairBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StairBlockAccessor$Type = ($StairBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StairBlockAccessor_ = $StairBlockAccessor$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$ControllableData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ControllableData {

constructor()

public "getLowFrequency"(): float
public "getHighFrequency"(): float
public "getTimeInMs"(): integer
get "lowFrequency"(): float
get "highFrequency"(): float
get "timeInMs"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllableData$Type = ($ControllableData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllableData_ = $ControllableData$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/model/$BedrockModelPOJO" {
import {$GeometryModelNew, $GeometryModelNew$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$GeometryModelNew"
import {$GeometryModelLegacy, $GeometryModelLegacy$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$GeometryModelLegacy"

export class $BedrockModelPOJO {

constructor()

public "getGeometryModelLegacy"(): $GeometryModelLegacy
public "getGeometryModelNew"(): $GeometryModelNew
public "getFormatVersion"(): string
get "geometryModelLegacy"(): $GeometryModelLegacy
get "geometryModelNew"(): $GeometryModelNew
get "formatVersion"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedrockModelPOJO$Type = ($BedrockModelPOJO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedrockModelPOJO_ = $BedrockModelPOJO$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/statemachine/$AnimationStateContext" {
import {$DiscreteTrackArray, $DiscreteTrackArray$Type} from "packages/com/tacz/guns/api/client/animation/$DiscreteTrackArray"
import {$AnimationStateMachine, $AnimationStateMachine$Type} from "packages/com/tacz/guns/api/client/animation/statemachine/$AnimationStateMachine"

export class $AnimationStateContext {

constructor()

public "getTrackArray"(): $DiscreteTrackArray
public "addTrackLine"(): integer
public "ensureTrackLineSize"(arg0: integer): void
public "getTrackLineSize"(): integer
public "assignNewTrack"(arg0: integer): integer
public "findIdleTrack"(arg0: integer, arg1: boolean): integer
public "ensureTracksAmount"(arg0: integer, arg1: integer): void
public "getAsSingletonTrack"(arg0: integer): integer
public "runAnimation"(arg0: string, arg1: integer, arg2: boolean, arg3: integer, arg4: float): void
public "holdAnimation"(arg0: integer): void
public "pauseAnimation"(arg0: integer): void
public "resumeAnimation"(arg0: integer): void
public "setAnimationProgress"(arg0: integer, arg1: float, arg2: boolean): void
public "adjustAnimationProgress"(arg0: integer, arg1: float, arg2: boolean): void
public "isPause"(arg0: integer): boolean
public "hasAnimationPrototype"(arg0: string): boolean
public "setShouldHideCrossHair"(arg0: boolean): void
public "getTrack"(arg0: integer, arg1: integer): integer
public "shouldHideCrossHair"(): boolean
public "getStateMachine"(): $AnimationStateMachine<(any)>
public "isHolding"(arg0: integer): boolean
public "stopAnimation"(arg0: integer): void
public "isStopped"(arg0: integer): boolean
public "trigger"(arg0: string): void
get "trackArray"(): $DiscreteTrackArray
get "trackLineSize"(): integer
get "stateMachine"(): $AnimationStateMachine<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationStateContext$Type = ($AnimationStateContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationStateContext_ = $AnimationStateContext$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$InaccuracyType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InaccuracyType extends $Enum<($InaccuracyType)> {
static readonly "STAND": $InaccuracyType
static readonly "MOVE": $InaccuracyType
static readonly "SNEAK": $InaccuracyType
static readonly "LIE": $InaccuracyType
static readonly "AIM": $InaccuracyType


public static "getInaccuracyType"(arg0: $LivingEntity$Type): $InaccuracyType
public static "getDefaultInaccuracy"(): $Map<($InaccuracyType), (float)>
public "isAim"(): boolean
public static "values"(): ($InaccuracyType)[]
public static "valueOf"(arg0: string): $InaccuracyType
get "defaultInaccuracy"(): $Map<($InaccuracyType), (float)>
get "aim"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InaccuracyType$Type = (("move") | ("aim") | ("lie") | ("stand") | ("sneak")) | ($InaccuracyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InaccuracyType_ = $InaccuracyType$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/recipe/$TableRecipe" {
import {$GunSmithTableIngredient, $GunSmithTableIngredient$Type} from "packages/com/tacz/guns/crafting/$GunSmithTableIngredient"
import {$GunSmithTableResult, $GunSmithTableResult$Type} from "packages/com/tacz/guns/crafting/result/$GunSmithTableResult"
import {$List, $List$Type} from "packages/java/util/$List"

export class $TableRecipe {

constructor()

public "getMaterials"(): $List<($GunSmithTableIngredient)>
public "getResult"(): $GunSmithTableResult
get "materials"(): $List<($GunSmithTableIngredient)>
get "result"(): $GunSmithTableResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableRecipe$Type = ($TableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TableRecipe_ = $TableRecipe$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GunKubeJSEvents$GunEventJS<E extends $Event> extends $EventJS implements $TimelessForgeEventWrappers$ForgeEventWrapper<(E)> {

constructor(arg0: E)

public "getForgeEvent"(): E
public "getEventSubId"(): $ResourceLocation
public "cancel"(): any
get "forgeEvent"(): E
get "eventSubId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$GunEventJS$Type<E> = ($GunKubeJSEvents$GunEventJS<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$GunEventJS_<E> = $GunKubeJSEvents$GunEventJS$Type<(E)>;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$GunAmmo" {
import {$AmmoParticle, $AmmoParticle$Type} from "packages/com/tacz/guns/client/resource/pojo/display/ammo/$AmmoParticle"

export class $GunAmmo {

constructor()

public "getParticle"(): $AmmoParticle
public "getTracerColor"(): string
get "particle"(): $AmmoParticle
get "tracerColor"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunAmmo$Type = ($GunAmmo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunAmmo_ = $GunAmmo$Type;
}}
declare module "packages/com/tacz/guns/api/client/other/$KeepingItemRenderer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $KeepingItemRenderer {

 "getCurrentItem"(): $ItemStack
 "keep"(arg0: $ItemStack$Type, arg1: long): void
}

export namespace $KeepingItemRenderer {
function getRenderer(): $KeepingItemRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeepingItemRenderer$Type = ($KeepingItemRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeepingItemRenderer_ = $KeepingItemRenderer$Type;
}}
declare module "packages/com/tacz/guns/api/$GunProperties" {
import {$LinkedList, $LinkedList$Type} from "packages/java/util/$LinkedList"
import {$ParameterizedCachePair, $ParameterizedCachePair$Type} from "packages/com/tacz/guns/api/modifier/$ParameterizedCachePair"
import {$ExtraDamage$DistanceDamagePair, $ExtraDamage$DistanceDamagePair$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$ExtraDamage$DistanceDamagePair"
import {$Pair, $Pair$Type} from "packages/it/unimi/dsi/fastutil/$Pair"
import {$Ignite, $Ignite$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$Ignite"
import {$MoveSpeed, $MoveSpeed$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$MoveSpeed"
import {$InaccuracyType, $InaccuracyType$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$InaccuracyType"
import {$GunProperty, $GunProperty$Type} from "packages/com/tacz/guns/api/$GunProperty"
import {$ExplosionData, $ExplosionData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$ExplosionData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GunProperties {
static readonly "ADS_TIME": $GunProperty<(float)>
/**
 * 
 * @deprecated
 */
static readonly "AIM_INACCURACY": $GunProperty<($Map<($InaccuracyType), (float)>)>
static readonly "AMMO_SPEED": $GunProperty<(float)>
static readonly "ARMOR_IGNORE": $GunProperty<(float)>
static readonly "DAMAGE": $GunProperty<($LinkedList<($ExtraDamage$DistanceDamagePair)>)>
static readonly "EFFECTIVE_RANGE": $GunProperty<(float)>
static readonly "EXPLOSION": $GunProperty<($ExplosionData)>
static readonly "MOVE_SPEED": $GunProperty<($MoveSpeed)>
static readonly "HEADSHOT_MULTIPLIER": $GunProperty<(float)>
static readonly "IGNITE": $GunProperty<($Ignite)>
static readonly "INACCURACY": $GunProperty<($Map<($InaccuracyType), (float)>)>
static readonly "KNOCKBACK": $GunProperty<(float)>
static readonly "PIERCE": $GunProperty<(integer)>
static readonly "RECOIL": $GunProperty<($ParameterizedCachePair<(float), (float)>)>
static readonly "ROUNDS_PER_MINUTE": $GunProperty<(integer)>
static readonly "SILENCE": $GunProperty<($Pair<(integer), (boolean)>)>
static readonly "WEIGHT": $GunProperty<(float)>


public static "allCacheModifiableByScript"(): $Map<(string), ($GunProperty<(any)>)>
public static "all"(): $Map<(string), ($GunProperty<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunProperties$Type = ($GunProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunProperties_ = $GunProperties$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$RenderLevelBobViewEventJS" {
import {$RenderLevelBobEvent$BobView, $RenderLevelBobEvent$BobView$Type} from "packages/com/tacz/guns/api/client/event/$RenderLevelBobEvent$BobView"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"

export class $GunKubeJSEvents$RenderLevelBobViewEventJS extends $GunKubeJSEvents$GunEventJS<($RenderLevelBobEvent$BobView)> {

constructor(arg0: $RenderLevelBobEvent$BobView$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$RenderLevelBobViewEventJS$Type = ($GunKubeJSEvents$RenderLevelBobViewEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$RenderLevelBobViewEventJS_ = $GunKubeJSEvents$RenderLevelBobViewEventJS$Type;
}}
declare module "packages/com/tacz/guns/item/$AmmoBoxItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$AmmoBoxItemDataAccessor, $AmmoBoxItemDataAccessor$Type} from "packages/com/tacz/guns/api/item/nbt/$AmmoBoxItemDataAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AmmoBoxItem extends $Item implements $DyeableLeatherItem, $AmmoBoxItemDataAccessor {
static readonly "PROPERTY_NAME": $ResourceLocation
static readonly "IRON_LEVEL": integer
static readonly "GOLD_LEVEL": integer
static readonly "DIAMOND_LEVEL": integer
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

public static "getStatue"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type, arg3: integer): float
public static "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public static "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
public "getColor"(arg0: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "isAmmoBoxOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAmmoCount"(arg0: $ItemStack$Type): integer
public "setAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
public "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
public "isAllTypeCreative"(arg0: $ItemStack$Type): boolean
public "getAmmoLevel"(arg0: $ItemStack$Type): integer
public "setAmmoLevel"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public "setCreative"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "isCreative"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoBoxItem$Type = ($AmmoBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoBoxItem_ = $AmmoBoxItem$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$GunRecoilKeyFrame" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

export class $GunRecoilKeyFrame implements $Comparable<($GunRecoilKeyFrame)> {

constructor()

public "getTime"(): float
public "setTime"(arg0: float): void
public "compareTo"(arg0: $GunRecoilKeyFrame$Type): integer
public "getValue"(): (float)[]
public "setValue"(arg0: (float)[]): void
get "time"(): float
set "time"(value: float)
get "value"(): (float)[]
set "value"(value: (float)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunRecoilKeyFrame$Type = ($GunRecoilKeyFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunRecoilKeyFrame_ = $GunRecoilKeyFrame$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/$IDisplay" {
import {$FileToIdConverter, $FileToIdConverter$Type} from "packages/net/minecraft/resources/$FileToIdConverter"

export interface $IDisplay {

 "init"(): void

(): void
}

export namespace $IDisplay {
const converter: $FileToIdConverter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDisplay$Type = ($IDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDisplay_ = $IDisplay$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$ChargeData" {
import {$ChargeType, $ChargeType$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$ChargeType"

export class $ChargeData {

constructor()

public "getIncreasePerTick"(): float
public "getDecreasePerTick"(): float
public "getDecreaseOnFire"(): float
public "getMaxCharge"(): float
public "getFireThreshold"(): float
public "getChargeType"(): $ChargeType
public "isChargeDuringCooldown"(): boolean
get "increasePerTick"(): float
get "decreasePerTick"(): float
get "decreaseOnFire"(): float
get "maxCharge"(): float
get "fireThreshold"(): float
get "chargeType"(): $ChargeType
get "chargeDuringCooldown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeData$Type = ($ChargeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeData_ = $ChargeData$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/model/$Description" {
import {$List, $List$Type} from "packages/java/util/$List"

export class $Description {

constructor()

public "getTextureWidth"(): integer
public "getTextureHeight"(): integer
public "getVisibleBoundsOffset"(): $List<(float)>
public "getVisibleBoundsWidth"(): float
public "getVisibleBoundsHeight"(): float
get "textureWidth"(): integer
get "textureHeight"(): integer
get "visibleBoundsOffset"(): $List<(float)>
get "visibleBoundsWidth"(): float
get "visibleBoundsHeight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Description$Type = ($Description);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Description_ = $Description$Type;
}}
declare module "packages/com/tacz/guns/item/$AttachmentItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$IAttachment, $IAttachment$Type} from "packages/com/tacz/guns/api/item/$IAttachment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AttachmentItemDataAccessor, $AttachmentItemDataAccessor$Type} from "packages/com/tacz/guns/api/item/nbt/$AttachmentItemDataAccessor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AttachmentItem extends $Item implements $AttachmentItemDataAccessor {
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

public static "fillItemCategory"(arg0: $AttachmentType$Type): $NonNullList<($ItemStack)>
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public "verifyTagAfterLoad"(arg0: $CompoundTag$Type): void
public "getType"(arg0: $ItemStack$Type): $AttachmentType
public "hasCustomLaserColor"(arg0: $ItemStack$Type): boolean
public "getLaserColor"(arg0: $ItemStack$Type): integer
public "setLaserColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "isAttachmentLike"(arg0: $CompoundTag$Type): boolean
public static "setZoomNumberToTag"(arg0: $CompoundTag$Type, arg1: integer): void
public "setAttachmentId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "getSkinId"(arg0: $ItemStack$Type): $ResourceLocation
public "setSkinId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "getZoomNumber"(arg0: $ItemStack$Type): integer
public "setZoomNumber"(arg0: $ItemStack$Type, arg1: integer): void
public static "getAttachmentIdFromTag"(arg0: $CompoundTag$Type): $ResourceLocation
public "getAttachmentId"(arg0: $ItemStack$Type): $ResourceLocation
public static "getZoomNumberFromTag"(arg0: $CompoundTag$Type): integer
public static "getIAttachmentOrNull"(arg0: $ItemStack$Type): $IAttachment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentItem$Type = ($AttachmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentItem_ = $AttachmentItem$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/util/$TimelessItemNbtFactory" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TimelessItemNbtFactory<T extends $Item, S extends $TimelessItemNbtFactory<(T), (S)>> {

constructor(arg0: T)

public "build"(): $ItemStack
public "setId"(arg0: $ResourceLocation$Type): S
public "setCount"(arg0: integer): S
set "id"(value: $ResourceLocation$Type)
set "count"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessItemNbtFactory$Type<T, S> = ($TimelessItemNbtFactory<(T), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessItemNbtFactory_<T, S> = $TimelessItemNbtFactory$Type<(T), (S)>;
}}
declare module "packages/com/tacz/guns/api/item/nbt/$GunItemDataAccessor" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GunProperty, $GunProperty$Type} from "packages/com/tacz/guns/api/$GunProperty"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ShooterDataHolder, $ShooterDataHolder$Type} from "packages/com/tacz/guns/entity/shooter/$ShooterDataHolder"
import {$IGun, $IGun$Type} from "packages/com/tacz/guns/api/item/$IGun"

export interface $GunItemDataAccessor extends $IGun {

 "getCurrentAmmoCount"(arg0: $ItemStack$Type): integer
 "useDummyAmmo"(arg0: $ItemStack$Type): boolean
 "getDummyAmmoAmount"(arg0: $ItemStack$Type): integer
 "addDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "getGunDisplayId"(arg0: $ItemStack$Type): $ResourceLocation
 "getFireMode"(arg0: $ItemStack$Type): $FireMode
 "hasHeatData"(arg0: $ItemStack$Type): boolean
 "lerpRPM"(arg0: $ItemStack$Type): float
 "setFireMode"(arg0: $ItemStack$Type, arg1: $FireMode$Type): void
 "setCurrentAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
 "getAimingZoom"(arg0: $ItemStack$Type): float
 "setDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "hasMaxDummyAmmo"(arg0: $ItemStack$Type): boolean
 "getMaxDummyAmmoAmount"(arg0: $ItemStack$Type): integer
 "setMaxDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "hasAttachmentLock"(arg0: $ItemStack$Type): boolean
 "setAttachmentLock"(arg0: $ItemStack$Type, arg1: boolean): void
 "setGunId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "setGunDisplayId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getExpToNextLevel"(arg0: $ItemStack$Type): integer
 "getExpCurrentLevel"(arg0: $ItemStack$Type): integer
 "reduceCurrentAmmoCount"(arg0: $ItemStack$Type): void
 "getBuiltinAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
 "installAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
 "unloadAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): void
 "hasBulletInBarrel"(arg0: $ItemStack$Type): boolean
 "setBulletInBarrel"(arg0: $ItemStack$Type, arg1: boolean): void
 "hasCustomLaserColor"(arg0: $ItemStack$Type): boolean
 "getLaserColor"(arg0: $ItemStack$Type): integer
 "setLaserColor"(arg0: $ItemStack$Type, arg1: integer): void
 "isOverheatLocked"(arg0: $ItemStack$Type): boolean
 "setOverheatLocked"(arg0: $ItemStack$Type, arg1: boolean): void
 "setHeatAmount"(arg0: $ItemStack$Type, arg1: float): void
 "lerpInaccuracy"(arg0: $ItemStack$Type): float
 "getHeatAmount"(arg0: $ItemStack$Type): float
 "getExp"(arg0: $ItemStack$Type): integer
 "getAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
 "getGunId"(arg0: $ItemStack$Type): $ResourceLocation
 "getLevel"(arg0: $ItemStack$Type): integer
 "getAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
 "getBuiltInAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
 "getAttachmentTag"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $CompoundTag
 "useInventoryAmmo"(arg0: $ItemStack$Type): boolean
 "dropAllAmmo"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "allowAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "allowAttachmentType"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): boolean
 "hasInventoryAmmo"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "getRPM"(arg0: $ItemStack$Type): integer
 "isCanCrawl"(arg0: $ItemStack$Type): boolean
 "modifyProperty"<T>(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: string, arg4: string, arg5: $Class$Type<(T)>, arg6: T): T
 "modifyProperty"<T>(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: string, arg4: $Class$Type<(T)>, arg5: T): T
 "modifyProperty"<T>(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $GunProperty$Type<(any)>, arg4: $Class$Type<(T)>, arg5: T): T
 "getExp"(arg0: integer): integer
 "getLevel"(arg0: integer): integer
 "getMaxLevel"(): integer
}

export namespace $GunItemDataAccessor {
const GUN_ID_TAG: string
const GUN_FIRE_MODE_TAG: string
const GUN_HAS_BULLET_IN_BARREL: string
const GUN_CURRENT_AMMO_COUNT_TAG: string
const GUN_ATTACHMENT_BASE: string
const GUN_EXP_TAG: string
const GUN_DUMMY_AMMO: string
const GUN_MAX_DUMMY_AMMO: string
const GUN_ATTACHMENT_LOCK: string
const GUN_DISPLAY_ID_TAG: string
const LASER_COLOR_TAG: string
const GUN_OVERHEAT_TAG: string
const GUN_OVERHEAT_LOCK_TAG: string
function mainhandHoldGun(arg0: $LivingEntity$Type): boolean
function mainHandHoldGun(arg0: $LivingEntity$Type): boolean
function getMainhandFireMode(arg0: $LivingEntity$Type): $FireMode
function getMainHandFireMode(arg0: $LivingEntity$Type): $FireMode
function getIGunOrNull(arg0: $ItemStack$Type): $IGun
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunItemDataAccessor$Type = ($GunItemDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunItemDataAccessor_ = $GunItemDataAccessor$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/$LaserConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LaserConfig {

constructor()

public "getLengthThird"(): float
public "getWidthThird"(): float
public "getDefaultColor"(): integer
public "canEdit"(): boolean
public "getWidth"(): float
public "getLength"(): integer
get "lengthThird"(): float
get "widthThird"(): float
get "defaultColor"(): integer
get "width"(): float
get "length"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserConfig$Type = ($LaserConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaserConfig_ = $LaserConfig$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$GunHeatData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GunHeatData {

constructor()

public "getOverHeatTime"(): long
public "getCoolingMultiplier"(): float
public "getCoolingDelay"(): long
public "getHeatMax"(): float
public "getMinInaccuracy"(): float
public "getMaxInaccuracy"(): float
public "getMinRpmMod"(): float
public "getMaxRpmMod"(): float
public "getHeatPerShot"(): float
get "overHeatTime"(): long
get "coolingMultiplier"(): float
get "coolingDelay"(): long
get "heatMax"(): float
get "minInaccuracy"(): float
get "maxInaccuracy"(): float
get "minRpmMod"(): float
get "maxRpmMod"(): float
get "heatPerShot"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunHeatData$Type = ($GunHeatData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunHeatData_ = $GunHeatData$Type;
}}
declare module "packages/com/tacz/guns/api/item/$IBlock" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IBlock {

 "getBlockId"(arg0: $ItemStack$Type): $ResourceLocation
 "setBlockId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
}

export namespace $IBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlock$Type = ($IBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlock_ = $IBlock$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunReloadEventJS" {
import {$GunReloadEvent, $GunReloadEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunReloadEvent"
import {$TimelessForgeEventWrappers$GunReloadWrapper, $TimelessForgeEventWrappers$GunReloadWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunReloadWrapper"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $GunKubeJSEvents$GunReloadEventJS extends $GunKubeJSEvents$GunEventJS<($GunReloadEvent)> implements $TimelessForgeEventWrappers$GunReloadWrapper {

constructor(arg0: $GunReloadEvent$Type)

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getEntity"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$GunReloadEventJS$Type = ($GunKubeJSEvents$GunReloadEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$GunReloadEventJS_ = $GunKubeJSEvents$GunReloadEventJS$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$ObjectAnimationChannel$ChannelType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ObjectAnimationChannel$ChannelType extends $Enum<($ObjectAnimationChannel$ChannelType)> {
static readonly "TRANSLATION": $ObjectAnimationChannel$ChannelType
static readonly "ROTATION": $ObjectAnimationChannel$ChannelType
static readonly "SCALE": $ObjectAnimationChannel$ChannelType


public static "values"(): ($ObjectAnimationChannel$ChannelType)[]
public static "valueOf"(arg0: string): $ObjectAnimationChannel$ChannelType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectAnimationChannel$ChannelType$Type = (("rotation") | ("translation") | ("scale")) | ($ObjectAnimationChannel$ChannelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectAnimationChannel$ChannelType_ = $ObjectAnimationChannel$ChannelType$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/attachment/$MeleeData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$EffectData, $EffectData$Type} from "packages/com/tacz/guns/resource/pojo/data/attachment/$EffectData"

export class $MeleeData {

constructor()

public "getDistance"(): float
public "getCooldown"(): float
public "getRangeAngle"(): float
public "getKnockback"(): float
public "getEffects"(): $List<($EffectData)>
public "getPrepTime"(): float
public "getDamage"(): float
get "distance"(): float
get "cooldown"(): float
get "rangeAngle"(): float
get "knockback"(): float
get "effects"(): $List<($EffectData)>
get "prepTime"(): float
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeleeData$Type = ($MeleeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeleeData_ = $MeleeData$Type;
}}
declare module "packages/com/tacz/guns/client/model/$BedrockGunModel" {
import {$AnimationListener, $AnimationListener$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListener"
import {$ShellRender, $ShellRender$Type} from "packages/com/tacz/guns/client/model/functional/$ShellRender"
import {$TextShow, $TextShow$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$TextShow"
import {$BedrockModelPOJO, $BedrockModelPOJO$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BedrockModelPOJO"
import {$BedrockModel, $BedrockModel$Type} from "packages/com/tacz/guns/client/model/bedrock/$BedrockModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$BedrockPart, $BedrockPart$Type} from "packages/com/tacz/guns/client/model/bedrock/$BedrockPart"
import {$ObjectAnimationChannel$ChannelType, $ObjectAnimationChannel$ChannelType$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimationChannel$ChannelType"
import {$BedrockAnimatedModel, $BedrockAnimatedModel$Type} from "packages/com/tacz/guns/client/model/$BedrockAnimatedModel"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BedrockVersion, $BedrockVersion$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BedrockVersion"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BedrockGunModel extends $BedrockAnimatedModel {
static readonly "CAMERA_NODE_NAME": string
static readonly "CONSTRAINT_NODE": string
static "dummyModel": $BedrockModel

constructor(arg0: $BedrockModelPOJO$Type, arg1: $BedrockVersion$Type)

public "setTextShowList"(arg0: $Map$Type<(string), ($TextShow$Type)>): void
public "getIdleSightPath"(): $List<($BedrockPart)>
public "getIronSightPath"(): $List<($BedrockPart)>
public "getScopePosPath"(): $List<($BedrockPart)>
public "getRefitAttachmentViewPath"(arg0: $AttachmentType$Type): $List<($BedrockPart)>
public "renderAccelerated"(arg0: $PoseStack$Type, arg1: $ItemStack$Type, arg2: $ItemDisplayContext$Type, arg3: $RenderType$Type, arg4: integer, arg5: integer): void
public "cleanAnimationTransform"(): void
public "supplyListeners"(arg0: string, arg1: $ObjectAnimationChannel$ChannelType$Type): $AnimationListener
public "getRenderHand"(): boolean
public "getCurrentAttachmentItem"(): $EnumMap<($AttachmentType), ($ItemStack)>
public "getAdditionalMagazineNode"(): $BedrockPart
public "getThirdPersonHandOriginPath"(): $List<($BedrockPart)>
public "getFixedOriginPath"(): $List<($BedrockPart)>
public "getGroundOriginPath"(): $List<($BedrockPart)>
public "getMuzzleFlashPosPath"(): $List<($BedrockPart)>
public "getShellRender"(arg0: integer): $ShellRender
public "setRenderHand"(arg0: boolean): void
public "getCurrentGunItem"(): $ItemStack
public "getRootNode"(): $BedrockPart
public "render"(arg0: $PoseStack$Type, arg1: $ItemStack$Type, arg2: $ItemDisplayContext$Type, arg3: $RenderType$Type, arg4: integer, arg5: integer): void
set "textShowList"(value: $Map$Type<(string), ($TextShow$Type)>)
get "idleSightPath"(): $List<($BedrockPart)>
get "ironSightPath"(): $List<($BedrockPart)>
get "scopePosPath"(): $List<($BedrockPart)>
get "renderHand"(): boolean
get "currentAttachmentItem"(): $EnumMap<($AttachmentType), ($ItemStack)>
get "additionalMagazineNode"(): $BedrockPart
get "thirdPersonHandOriginPath"(): $List<($BedrockPart)>
get "fixedOriginPath"(): $List<($BedrockPart)>
get "groundOriginPath"(): $List<($BedrockPart)>
get "muzzleFlashPosPath"(): $List<($BedrockPart)>
set "renderHand"(value: boolean)
get "currentGunItem"(): $ItemStack
get "rootNode"(): $BedrockPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedrockGunModel$Type = ($BedrockGunModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedrockGunModel_ = $BedrockGunModel$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunFireWrapper" {
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$GunFireEvent, $GunFireEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunFireEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $TimelessForgeEventWrappers$GunFireWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($GunFireEvent)> {

 "getLogicalSide"(): $LogicalSide
 "getGunItemStack"(): $ItemStack
 "getShooter"(): $LivingEntity
 "getForgeEvent"(): $GunFireEvent

(): $LogicalSide
}

export namespace $TimelessForgeEventWrappers$GunFireWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$GunFireWrapper$Type = ($TimelessForgeEventWrappers$GunFireWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$GunFireWrapper_ = $TimelessForgeEventWrappers$GunFireWrapper$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$DefaultAnimationType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DefaultAnimationType extends $Enum<($DefaultAnimationType)> {
static readonly "RIFLE": $DefaultAnimationType
static readonly "PISTOL": $DefaultAnimationType


public static "values"(): ($DefaultAnimationType)[]
public static "valueOf"(arg0: string): $DefaultAnimationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultAnimationType$Type = (("pistol") | ("rifle")) | ($DefaultAnimationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultAnimationType_ = $DefaultAnimationType$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$RenderItemInHandBobViewEventJS" {
import {$RenderItemInHandBobEvent$BobView, $RenderItemInHandBobEvent$BobView$Type} from "packages/com/tacz/guns/api/client/event/$RenderItemInHandBobEvent$BobView"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"

export class $GunKubeJSEvents$RenderItemInHandBobViewEventJS extends $GunKubeJSEvents$GunEventJS<($RenderItemInHandBobEvent$BobView)> {

constructor(arg0: $RenderItemInHandBobEvent$BobView$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$RenderItemInHandBobViewEventJS$Type = ($GunKubeJSEvents$RenderItemInHandBobViewEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$RenderItemInHandBobViewEventJS_ = $GunKubeJSEvents$RenderItemInHandBobViewEventJS$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$EntityKillByGunEventJS" {
import {$TimelessForgeEventWrappers$EntityKillByGunWrapper, $TimelessForgeEventWrappers$EntityKillByGunWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$EntityKillByGunWrapper"
import {$GunDamageSourcePart, $GunDamageSourcePart$Type} from "packages/com/tacz/guns/api/event/common/$GunDamageSourcePart"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$EntityKillByGunEvent, $EntityKillByGunEvent$Type} from "packages/com/tacz/guns/api/event/common/$EntityKillByGunEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GunKubeJSEvents$EntityKillByGunEventJS extends $GunKubeJSEvents$GunEventJS<($EntityKillByGunEvent)> implements $TimelessForgeEventWrappers$EntityKillByGunWrapper {

constructor(arg0: $EntityKillByGunEvent$Type)

public "getEventSubId"(): $ResourceLocation
public "getBaseDamage"(): float
public "getAttacker"(): $LivingEntity
public "getGunDisplayId"(): $ResourceLocation
public "getDamageSource"(arg0: $GunDamageSourcePart$Type): $DamageSource
public "getBullet"(): $Entity
public "getHeadshotMultiplier"(): float
public "isHeadShot"(): boolean
public "getLogicalSide"(): $LogicalSide
public "getKilledEntity"(): $LivingEntity
public "getGunId"(): $ResourceLocation
get "eventSubId"(): $ResourceLocation
get "baseDamage"(): float
get "attacker"(): $LivingEntity
get "gunDisplayId"(): $ResourceLocation
get "bullet"(): $Entity
get "headshotMultiplier"(): float
get "headShot"(): boolean
get "logicalSide"(): $LogicalSide
get "killedEntity"(): $LivingEntity
get "gunId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$EntityKillByGunEventJS$Type = ($GunKubeJSEvents$EntityKillByGunEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$EntityKillByGunEventJS_ = $GunKubeJSEvents$EntityKillByGunEventJS$Type;
}}
declare module "packages/com/tacz/guns/item/$DefaultTableItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$GunSmithTableItem, $GunSmithTableItem$Type} from "packages/com/tacz/guns/item/$GunSmithTableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DefaultTableItem extends $GunSmithTableItem {
static readonly "ID": $ResourceLocation
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

constructor(arg0: $Block$Type)

public "getBlockId"(arg0: $ItemStack$Type): $ResourceLocation
public "setBlockId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultTableItem$Type = ($DefaultTableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultTableItem_ = $DefaultTableItem$Type;
}}
declare module "packages/com/tacz/guns/client/model/listener/constraint/$ConstraintObject" {
import {$AnimationListener, $AnimationListener$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListener"
import {$BedrockPart, $BedrockPart$Type} from "packages/com/tacz/guns/client/model/bedrock/$BedrockPart"
import {$ObjectAnimationChannel$ChannelType, $ObjectAnimationChannel$ChannelType$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimationChannel$ChannelType"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$AnimationListenerSupplier, $AnimationListenerSupplier$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListenerSupplier"
import {$BonesItem, $BonesItem$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BonesItem"

export class $ConstraintObject implements $AnimationListenerSupplier {
 "translationConstraint": $Vector3f
 "rotationConstraint": $Vector3f
 "node": $BedrockPart
 "bonesItem": $BonesItem

constructor()

public "supplyListeners"(arg0: string, arg1: $ObjectAnimationChannel$ChannelType$Type): $AnimationListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintObject$Type = ($ConstraintObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintObject_ = $ConstraintObject$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$GunDrawEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $GunDrawEvent extends $Event implements $KubeJSGunEventPoster<($GunDrawEvent)> {

constructor(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $LogicalSide$Type)
constructor()

public "getLogicalSide"(): $LogicalSide
public "getPreviousGunItem"(): $ItemStack
public "getCurrentGunItem"(): $ItemStack
public "getEntity"(): $LivingEntity
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $GunDrawEvent$Type): void
public "postClientEventToKubeJS"(arg0: $GunDrawEvent$Type): void
public "postServerEventToKubeJS"(arg0: $GunDrawEvent$Type): void
get "logicalSide"(): $LogicalSide
get "previousGunItem"(): $ItemStack
get "currentGunItem"(): $ItemStack
get "entity"(): $LivingEntity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunDrawEvent$Type = ($GunDrawEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunDrawEvent_ = $GunDrawEvent$Type;
}}
declare module "packages/com/tacz/guns/resource/index/$CommonGunIndex" {
import {$GunData, $GunData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunData"
import {$GunIndexPOJO, $GunIndexPOJO$Type} from "packages/com/tacz/guns/resource/pojo/$GunIndexPOJO"
import {$BulletData, $BulletData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$BulletData"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"

export class $CommonGunIndex {


public "getGunData"(): $GunData
public "getPojo"(): $GunIndexPOJO
public "getBulletData"(): $BulletData
public "getScriptParam"(): $LuaTable
public "getScript"(): $LuaTable
public "getSort"(): integer
public static "getInstance"(arg0: $GunIndexPOJO$Type): $CommonGunIndex
public "getType"(): string
get "gunData"(): $GunData
get "pojo"(): $GunIndexPOJO
get "bulletData"(): $BulletData
get "scriptParam"(): $LuaTable
get "script"(): $LuaTable
get "sort"(): integer
get "type"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonGunIndex$Type = ($CommonGunIndex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonGunIndex_ = $CommonGunIndex$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$EntityHurtByGunEvent" {
import {$GunDamageSourcePart, $GunDamageSourcePart$Type} from "packages/com/tacz/guns/api/event/common/$GunDamageSourcePart"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityHurtByGunEvent extends $Event implements $KubeJSGunEventPoster<($EntityHurtByGunEvent)> {

constructor()

public "getAttacker"(): $LivingEntity
public "getGunDisplayId"(): $ResourceLocation
public "getDamageSource"(arg0: $GunDamageSourcePart$Type): $DamageSource
public "getBullet"(): $Entity
public "getHurtEntity"(): $Entity
public "getBaseAmount"(): float
public "getHeadshotMultiplier"(): float
public "isHeadShot"(): boolean
public "getLogicalSide"(): $LogicalSide
public "getGunId"(): $ResourceLocation
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "getAmount"(): float
public "postEventToKubeJS"(arg0: $EntityHurtByGunEvent$Type): void
public "postClientEventToKubeJS"(arg0: $EntityHurtByGunEvent$Type): void
public "postServerEventToKubeJS"(arg0: $EntityHurtByGunEvent$Type): void
get "attacker"(): $LivingEntity
get "gunDisplayId"(): $ResourceLocation
get "bullet"(): $Entity
get "hurtEntity"(): $Entity
get "baseAmount"(): float
get "headshotMultiplier"(): float
get "headShot"(): boolean
get "logicalSide"(): $LogicalSide
get "gunId"(): $ResourceLocation
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "amount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHurtByGunEvent$Type = ($EntityHurtByGunEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityHurtByGunEvent_ = $EntityHurtByGunEvent$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/$AttachmentIndexPOJO" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AttachmentIndexPOJO {

constructor()

public "getDisplay"(): $ResourceLocation
public "getData"(): $ResourceLocation
public "getSort"(): integer
public "getTooltip"(): string
public "getName"(): string
public "isHidden"(): boolean
public "getType"(): $AttachmentType
get "display"(): $ResourceLocation
get "data"(): $ResourceLocation
get "sort"(): integer
get "tooltip"(): string
get "name"(): string
get "hidden"(): boolean
get "type"(): $AttachmentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentIndexPOJO$Type = ($AttachmentIndexPOJO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentIndexPOJO_ = $AttachmentIndexPOJO$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$GunShootEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $GunShootEvent extends $Event implements $KubeJSGunEventPoster<($GunShootEvent)> {

constructor(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LogicalSide$Type)
constructor()

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getShooter"(): $LivingEntity
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $GunShootEvent$Type): void
public "postClientEventToKubeJS"(arg0: $GunShootEvent$Type): void
public "postServerEventToKubeJS"(arg0: $GunShootEvent$Type): void
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "shooter"(): $LivingEntity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunShootEvent$Type = ($GunShootEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunShootEvent_ = $GunShootEvent$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/statemachine/$LuaAnimationStateMachine" {
import {$AnimationStateContext, $AnimationStateContext$Type} from "packages/com/tacz/guns/api/client/animation/statemachine/$AnimationStateContext"
import {$AnimationStateMachine, $AnimationStateMachine$Type} from "packages/com/tacz/guns/api/client/animation/statemachine/$AnimationStateMachine"

export class $LuaAnimationStateMachine<T extends $AnimationStateContext> extends $AnimationStateMachine<(T)> {


public "exit"(): void
public "initialize"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaAnimationStateMachine$Type<T> = ($LuaAnimationStateMachine<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaAnimationStateMachine_<T> = $LuaAnimationStateMachine$Type<(T)>;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$EntityHurtByGunPreWrapper" {
import {$GunDamageSourcePart, $GunDamageSourcePart$Type} from "packages/com/tacz/guns/api/event/common/$GunDamageSourcePart"
import {$EntityHurtByGunEvent$Pre, $EntityHurtByGunEvent$Pre$Type} from "packages/com/tacz/guns/api/event/common/$EntityHurtByGunEvent$Pre"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$TimelessForgeEventWrappers$EntityHurtByGunWrapper, $TimelessForgeEventWrappers$EntityHurtByGunWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$EntityHurtByGunWrapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper extends $TimelessForgeEventWrappers$EntityHurtByGunWrapper<($EntityHurtByGunEvent$Pre)> {

 "setGunId"(arg0: $ResourceLocation$Type): void
 "setHeadshot"(arg0: boolean): void
 "setHeadshotMultiplier"(arg0: float): void
 "setHurtEntity"(arg0: $Entity$Type): void
 "setAttacker"(arg0: $LivingEntity$Type): void
 "setBaseAmount"(arg0: float): void
 "setDamageSource"(arg0: $GunDamageSourcePart$Type, arg1: $DamageSource$Type): void
 "getAttacker"(): $LivingEntity
 "getDamageSource"(arg0: $GunDamageSourcePart$Type): $DamageSource
 "getBullet"(): $Entity
 "getHurtEntity"(): $Entity
 "getBaseAmount"(): float
 "getHeadshotMultiplier"(): float
 "isHeadShot"(): boolean
 "getLogicalSide"(): $LogicalSide
 "getGunId"(): $ResourceLocation
 "getForgeEvent"(): $EntityHurtByGunEvent$Pre

(arg0: $ResourceLocation$Type): void
}

export namespace $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper$Type = ($TimelessForgeEventWrappers$EntityHurtByGunPreWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper_ = $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$RenderItemInHandBobHurtEventJS" {
import {$RenderItemInHandBobEvent$BobHurt, $RenderItemInHandBobEvent$BobHurt$Type} from "packages/com/tacz/guns/api/client/event/$RenderItemInHandBobEvent$BobHurt"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"

export class $GunKubeJSEvents$RenderItemInHandBobHurtEventJS extends $GunKubeJSEvents$GunEventJS<($RenderItemInHandBobEvent$BobHurt)> {

constructor(arg0: $RenderItemInHandBobEvent$BobHurt$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$RenderItemInHandBobHurtEventJS$Type = ($GunKubeJSEvents$RenderItemInHandBobHurtEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$RenderItemInHandBobHurtEventJS_ = $GunKubeJSEvents$RenderItemInHandBobHurtEventJS$Type;
}}
declare module "packages/com/tacz/guns/api/item/$IAmmoBox" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IAmmoBox {

 "isAmmoBoxOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getAmmoCount"(arg0: $ItemStack$Type): integer
 "setAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
 "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
 "isAllTypeCreative"(arg0: $ItemStack$Type): boolean
 "getAmmoLevel"(arg0: $ItemStack$Type): integer
 "setAmmoLevel"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
 "setCreative"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "isCreative"(arg0: $ItemStack$Type): boolean
}

export namespace $IAmmoBox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAmmoBox$Type = ($IAmmoBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAmmoBox_ = $IAmmoBox$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$AnimationChannelContent" {
import {$AnimationChannelContent$LerpMode, $AnimationChannelContent$LerpMode$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationChannelContent$LerpMode"

export class $AnimationChannelContent {
 "keyframeTimeS": (float)[]
 "values": ((float)[])[]
 "lerpModes": ($AnimationChannelContent$LerpMode)[]

constructor(arg0: $AnimationChannelContent$Type)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationChannelContent$Type = ($AnimationChannelContent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationChannelContent_ = $AnimationChannelContent$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/model/$FaceItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FaceItem {
static readonly "EMPTY": $FaceItem

constructor()

public "getUv"(): (float)[]
public "getUvSize"(): (float)[]
public static "single16X"(): $FaceItem
get "uv"(): (float)[]
get "uvSize"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceItem$Type = ($FaceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceItem_ = $FaceItem$Type;
}}
declare module "packages/com/tacz/guns/resource/index/$CommonAmmoIndex" {
import {$AmmoIndexPOJO, $AmmoIndexPOJO$Type} from "packages/com/tacz/guns/resource/pojo/$AmmoIndexPOJO"

export class $CommonAmmoIndex {


public "getPojo"(): $AmmoIndexPOJO
public "getSort"(): integer
public "getStackSize"(): integer
public static "getInstance"(arg0: $AmmoIndexPOJO$Type): $CommonAmmoIndex
get "pojo"(): $AmmoIndexPOJO
get "sort"(): integer
get "stackSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonAmmoIndex$Type = ($CommonAmmoIndex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonAmmoIndex_ = $CommonAmmoIndex$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunShootEventJS" {
import {$TimelessForgeEventWrappers$GunShootWrapper, $TimelessForgeEventWrappers$GunShootWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunShootWrapper"
import {$GunShootEvent, $GunShootEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunShootEvent"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $GunKubeJSEvents$GunShootEventJS extends $GunKubeJSEvents$GunEventJS<($GunShootEvent)> implements $TimelessForgeEventWrappers$GunShootWrapper {

constructor(arg0: $GunShootEvent$Type)

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getShooter"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "shooter"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$GunShootEventJS$Type = ($GunKubeJSEvents$GunShootEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$GunShootEventJS_ = $GunKubeJSEvents$GunShootEventJS$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$ObjectAnimationChannel" {
import {$AnimationListener, $AnimationListener$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListener"
import {$ObjectAnimationChannel$ChannelType, $ObjectAnimationChannel$ChannelType$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimationChannel$ChannelType"
import {$AnimationChannelContent, $AnimationChannelContent$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationChannelContent"
import {$Interpolator, $Interpolator$Type} from "packages/com/tacz/guns/api/client/animation/interpolator/$Interpolator"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ObjectAnimationChannel {
readonly "type": $ObjectAnimationChannel$ChannelType
 "node": string
 "content": $AnimationChannelContent
 "interpolator": $Interpolator

constructor(arg0: $ObjectAnimationChannel$ChannelType$Type, arg1: $AnimationChannelContent$Type)
constructor(arg0: $ObjectAnimationChannel$ChannelType$Type)

public "clearListeners"(): void
public "getEndTimeS"(): float
public "getResult"(arg0: float): (float)[]
public "removeListener"(arg0: $AnimationListener$Type): void
public "getListeners"(): $List<($AnimationListener)>
public "addListener"(arg0: $AnimationListener$Type): void
public "update"(arg0: float, arg1: boolean): void
get "endTimeS"(): float
get "listeners"(): $List<($AnimationListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectAnimationChannel$Type = ($ObjectAnimationChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectAnimationChannel_ = $ObjectAnimationChannel$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/attachment/$AttachmentData" {
import {$JsonProperty, $JsonProperty$Type} from "packages/com/tacz/guns/api/modifier/$JsonProperty"
import {$MeleeData, $MeleeData$Type} from "packages/com/tacz/guns/resource/pojo/data/attachment/$MeleeData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AttachmentData {

constructor()

public "addModifier"(arg0: string, arg1: $JsonProperty$Type<(any)>): void
public "getMeleeData"(): $MeleeData
public "getExtendedMagLevel"(): integer
public "getWeight"(): float
public "getModifier"(): $Map<(string), ($JsonProperty<(any)>)>
get "meleeData"(): $MeleeData
get "extendedMagLevel"(): integer
get "weight"(): float
get "modifier"(): $Map<(string), ($JsonProperty<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentData$Type = ($AttachmentData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentData_ = $AttachmentData$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/util/$GunSmithTableResultInfo" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GunSmithTableResultInfo$OutputGroupName, $GunSmithTableResultInfo$OutputGroupName$Type} from "packages/com/tacz/guns/compat/kubejs/util/$GunSmithTableResultInfo$OutputGroupName"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GunSmithTableResultInfo {


public static "createFromJson"(arg0: $JsonObject$Type): $GunSmithTableResultInfo
public static "createFromItemStack"(arg0: $ItemStack$Type): $GunSmithTableResultInfo
public "setCustomItem"(arg0: $JsonObject$Type): $GunSmithTableResultInfo
public "getCustomItem"(): $JsonObject
public "setGroupName"(arg0: string): $GunSmithTableResultInfo
public "setNbt"(arg0: $CompoundTag$Type): $GunSmithTableResultInfo
public "setType"(arg0: string): $GunSmithTableResultInfo
public "getCount"(): integer
public "toJson"(): $JsonObject
public "setGroup"(arg0: $GunSmithTableResultInfo$OutputGroupName$Type): $GunSmithTableResultInfo
public "setId"(arg0: $ResourceLocation$Type): $GunSmithTableResultInfo
public "setCount"(arg0: integer): $GunSmithTableResultInfo
public "getNbt"(): $CompoundTag
public static "of"(arg0: any): $GunSmithTableResultInfo
public "getId"(): $ResourceLocation
public "getType"(): string
public static "create"(): $GunSmithTableResultInfo
set "customItem"(value: $JsonObject$Type)
get "customItem"(): $JsonObject
set "groupName"(value: string)
set "nbt"(value: $CompoundTag$Type)
set "type"(value: string)
get "count"(): integer
set "group"(value: $GunSmithTableResultInfo$OutputGroupName$Type)
set "id"(value: $ResourceLocation$Type)
set "count"(value: integer)
get "nbt"(): $CompoundTag
get "id"(): $ResourceLocation
get "type"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableResultInfo$Type = ($GunSmithTableResultInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableResultInfo_ = $GunSmithTableResultInfo$Type;
}}
declare module "packages/com/tacz/guns/api/entity/$ReloadState" {
import {$ReloadState$StateType, $ReloadState$StateType$Type} from "packages/com/tacz/guns/api/entity/$ReloadState$StateType"

export class $ReloadState {
static readonly "NOT_RELOADING_COUNTDOWN": integer

constructor()
constructor(arg0: $ReloadState$Type)

public "getCountDown"(): long
public "setStateType"(arg0: $ReloadState$StateType$Type): void
public "setCountDown"(arg0: long): void
public "getStateType"(): $ReloadState$StateType
public "equals"(arg0: any): boolean
get "countDown"(): long
set "stateType"(value: $ReloadState$StateType$Type)
set "countDown"(value: long)
get "stateType"(): $ReloadState$StateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadState$Type = ($ReloadState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReloadState_ = $ReloadState$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunFinishReloadWrapper" {
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$GunFinishReloadEvent, $GunFinishReloadEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunFinishReloadEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export interface $TimelessForgeEventWrappers$GunFinishReloadWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($GunFinishReloadEvent)> {

 "getLogicalSide"(): $LogicalSide
 "getGunItemStack"(): $ItemStack
 "getForgeEvent"(): $GunFinishReloadEvent

(): $LogicalSide
}

export namespace $TimelessForgeEventWrappers$GunFinishReloadWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$GunFinishReloadWrapper$Type = ($TimelessForgeEventWrappers$GunFinishReloadWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$GunFinishReloadWrapper_ = $TimelessForgeEventWrappers$GunFinishReloadWrapper$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$AmmoHitBlockWrapper" {
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$EntityKineticBullet, $EntityKineticBullet$Type} from "packages/com/tacz/guns/entity/$EntityKineticBullet"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AmmoHitBlockEvent, $AmmoHitBlockEvent$Type} from "packages/com/tacz/guns/api/event/server/$AmmoHitBlockEvent"

export interface $TimelessForgeEventWrappers$AmmoHitBlockWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($AmmoHitBlockEvent)> {

 "getHitResult"(): $BlockHitResult
 "getAmmo"(): $EntityKineticBullet
 "getLevel"(): $Level
 "getState"(): $BlockState
 "getForgeEvent"(): $AmmoHitBlockEvent

(): $BlockHitResult
}

export namespace $TimelessForgeEventWrappers$AmmoHitBlockWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$AmmoHitBlockWrapper$Type = ($TimelessForgeEventWrappers$AmmoHitBlockWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$AmmoHitBlockWrapper_ = $TimelessForgeEventWrappers$AmmoHitBlockWrapper$Type;
}}
declare module "packages/com/tacz/guns/crafting/$GunSmithTableSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$GunSmithTableRecipe, $GunSmithTableRecipe$Type} from "packages/com/tacz/guns/crafting/$GunSmithTableRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $GunSmithTableSerializer implements $RecipeSerializer<($GunSmithTableRecipe)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $GunSmithTableRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $GunSmithTableRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $GunSmithTableRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $GunSmithTableRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableSerializer$Type = ($GunSmithTableSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableSerializer_ = $GunSmithTableSerializer$Type;
}}
declare module "packages/com/tacz/guns/item/$GunSmithTableItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$BlockItemDataAccessor, $BlockItemDataAccessor$Type} from "packages/com/tacz/guns/api/item/nbt/$BlockItemDataAccessor"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GunSmithTableItem extends $BlockItem implements $BlockItemDataAccessor {
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

constructor(arg0: $Block$Type)

public static "fillItemCategory"(): $NonNullList<($ItemStack)>
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public "getBlockId"(arg0: $ItemStack$Type): $ResourceLocation
public "setBlockId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableItem$Type = ($GunSmithTableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableItem_ = $GunSmithTableItem$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$FeedType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FeedType extends $Enum<($FeedType)> {
static readonly "MAGAZINE": $FeedType
static readonly "MANUAL": $FeedType
static readonly "FUEL": $FeedType
static readonly "INVENTORY": $FeedType


public static "values"(): ($FeedType)[]
public static "valueOf"(arg0: string): $FeedType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedType$Type = (("fuel") | ("magazine") | ("manual") | ("inventory")) | ($FeedType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedType_ = $FeedType$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$FireSound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FireSound {

constructor()

public "getFireMultiplier"(): float
public "getSilenceMultiplier"(): float
get "fireMultiplier"(): float
get "silenceMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireSound$Type = ($FireSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireSound_ = $FireSound$Type;
}}
declare module "packages/com/tacz/guns/item/$ModernKineticGunItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$GunItemDataAccessor, $GunItemDataAccessor$Type} from "packages/com/tacz/guns/api/item/nbt/$GunItemDataAccessor"
import {$AbstractGunItem, $AbstractGunItem$Type} from "packages/com/tacz/guns/api/item/gun/$AbstractGunItem"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$ReloadState, $ReloadState$Type} from "packages/com/tacz/guns/api/entity/$ReloadState"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$ModernKineticGunItem$DefaultPropertyModification, $ModernKineticGunItem$DefaultPropertyModification$Type} from "packages/com/tacz/guns/item/$ModernKineticGunItem$DefaultPropertyModification"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GunHeatData, $GunHeatData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunHeatData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ShooterDataHolder, $ShooterDataHolder$Type} from "packages/com/tacz/guns/entity/shooter/$ShooterDataHolder"
import {$IGun, $IGun$Type} from "packages/com/tacz/guns/api/item/$IGun"

export class $ModernKineticGunItem extends $AbstractGunItem implements $GunItemDataAccessor {
static readonly "TYPE_NAME": string
readonly "defaultPropertyModification": $ModernKineticGunItem$DefaultPropertyModification
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

public "interruptReload"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): void
public "doBulletSpread"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $Projectile$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "startBolt"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): boolean
public "startReload"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): boolean
public "tickReload"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $ReloadState
public "tickLocked"(arg0: $IGun$Type, arg1: $ItemStack$Type, arg2: $GunHeatData$Type, arg3: long): void
public "tickNormal"(arg0: $IGun$Type, arg1: $ItemStack$Type, arg2: $GunHeatData$Type, arg3: long): void
public "modifyProperty"<T>(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: string, arg4: string, arg5: $Class$Type<(T)>, arg6: T): T
public "getExp"(arg0: integer): integer
public "getLevel"(arg0: integer): integer
public "getMaxLevel"(): integer
public "melee"(arg0: $ShooterDataHolder$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "shoot"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $Supplier$Type<(float)>, arg3: $Supplier$Type<(float)>, arg4: $LivingEntity$Type): void
public "fireSelect"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type): void
public "tickBolt"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): boolean
public "tickHeat"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): void
public "getCurrentAmmoCount"(arg0: $ItemStack$Type): integer
public "useDummyAmmo"(arg0: $ItemStack$Type): boolean
public "getDummyAmmoAmount"(arg0: $ItemStack$Type): integer
public "addDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "getGunDisplayId"(arg0: $ItemStack$Type): $ResourceLocation
public "getFireMode"(arg0: $ItemStack$Type): $FireMode
public "hasHeatData"(arg0: $ItemStack$Type): boolean
public "lerpRPM"(arg0: $ItemStack$Type): float
public "setFireMode"(arg0: $ItemStack$Type, arg1: $FireMode$Type): void
public "setCurrentAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
public "getAimingZoom"(arg0: $ItemStack$Type): float
public "setDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "hasMaxDummyAmmo"(arg0: $ItemStack$Type): boolean
public "getMaxDummyAmmoAmount"(arg0: $ItemStack$Type): integer
public "setMaxDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "hasAttachmentLock"(arg0: $ItemStack$Type): boolean
public "setAttachmentLock"(arg0: $ItemStack$Type, arg1: boolean): void
public "setGunId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "setGunDisplayId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "getExpToNextLevel"(arg0: $ItemStack$Type): integer
public "getExpCurrentLevel"(arg0: $ItemStack$Type): integer
public "reduceCurrentAmmoCount"(arg0: $ItemStack$Type): void
public "getBuiltinAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
public "installAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
public "unloadAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): void
public "hasBulletInBarrel"(arg0: $ItemStack$Type): boolean
public "setBulletInBarrel"(arg0: $ItemStack$Type, arg1: boolean): void
public "hasCustomLaserColor"(arg0: $ItemStack$Type): boolean
public "getLaserColor"(arg0: $ItemStack$Type): integer
public "setLaserColor"(arg0: $ItemStack$Type, arg1: integer): void
public "isOverheatLocked"(arg0: $ItemStack$Type): boolean
public "setOverheatLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public "setHeatAmount"(arg0: $ItemStack$Type, arg1: float): void
public "lerpInaccuracy"(arg0: $ItemStack$Type): float
public "getHeatAmount"(arg0: $ItemStack$Type): float
public "getExp"(arg0: $ItemStack$Type): integer
public "getAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
public "getGunId"(arg0: $ItemStack$Type): $ResourceLocation
public "getLevel"(arg0: $ItemStack$Type): integer
public "getAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
public "getBuiltInAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
public "getAttachmentTag"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public static "mainhandHoldGun"(arg0: $LivingEntity$Type): boolean
public static "mainHandHoldGun"(arg0: $LivingEntity$Type): boolean
/**
 * 
 * @deprecated
 */
public static "getMainhandFireMode"(arg0: $LivingEntity$Type): $FireMode
public static "getMainHandFireMode"(arg0: $LivingEntity$Type): $FireMode
public static "getIGunOrNull"(arg0: $ItemStack$Type): $IGun
public static "matchesIgnoreCount"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModernKineticGunItem$Type = ($ModernKineticGunItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModernKineticGunItem_ = $ModernKineticGunItem$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$ObjectAnimationRunner" {
import {$ObjectAnimation, $ObjectAnimation$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimation"

export class $ObjectAnimationRunner {

constructor(arg0: $ObjectAnimation$Type)

public "isTransitioning"(): boolean
public "getTransitionTimeNs"(): long
public "getTransitionProgressNs"(): long
public "setTransitionProgressNs"(arg0: long): void
public "stopTransition"(): void
public "isPausing"(): boolean
public "setProgressNs"(arg0: long): void
public "getTransitionTo"(): $ObjectAnimationRunner
public "getProgressNs"(): long
public "updateSoundOnly"(): void
public "getAnimation"(): $ObjectAnimation
public "isHolding"(): boolean
public "hold"(): void
public "transition"(arg0: $ObjectAnimationRunner$Type, arg1: long): void
public "isStopped"(): boolean
public "isRunning"(): boolean
public "pause"(): void
public "run"(): void
public "update"(arg0: boolean): void
public "stop"(): void
public "reset"(): void
get "transitioning"(): boolean
get "transitionTimeNs"(): long
get "transitionProgressNs"(): long
set "transitionProgressNs"(value: long)
get "pausing"(): boolean
set "progressNs"(value: long)
get "transitionTo"(): $ObjectAnimationRunner
get "progressNs"(): long
get "animation"(): $ObjectAnimation
get "holding"(): boolean
get "stopped"(): boolean
get "running"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectAnimationRunner$Type = ($ObjectAnimationRunner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectAnimationRunner_ = $ObjectAnimationRunner$Type;
}}
declare module "packages/com/tacz/guns/client/model/listener/camera/$CameraAnimationObject" {
import {$AnimationListener, $AnimationListener$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListener"
import {$ObjectAnimationChannel$ChannelType, $ObjectAnimationChannel$ChannelType$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimationChannel$ChannelType"
import {$AnimationListenerSupplier, $AnimationListenerSupplier$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListenerSupplier"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$ModelRendererWrapper, $ModelRendererWrapper$Type} from "packages/com/tacz/guns/client/model/bedrock/$ModelRendererWrapper"

export class $CameraAnimationObject implements $AnimationListenerSupplier {
 "rotationQuaternion": $Quaternionf
 "cameraRenderer": $ModelRendererWrapper

constructor()

public "supplyListeners"(arg0: string, arg1: $ObjectAnimationChannel$ChannelType$Type): $AnimationListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraAnimationObject$Type = ($CameraAnimationObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraAnimationObject_ = $CameraAnimationObject$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$ObjectAnimation$PlayType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ObjectAnimation$PlayType extends $Enum<($ObjectAnimation$PlayType)> {
static readonly "PLAY_ONCE_HOLD": $ObjectAnimation$PlayType
static readonly "PLAY_ONCE_STOP": $ObjectAnimation$PlayType
static readonly "LOOP": $ObjectAnimation$PlayType


public static "values"(): ($ObjectAnimation$PlayType)[]
public static "valueOf"(arg0: string): $ObjectAnimation$PlayType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectAnimation$PlayType$Type = (("play_once_hold") | ("loop") | ("play_once_stop")) | ($ObjectAnimation$PlayType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectAnimation$PlayType_ = $ObjectAnimation$PlayType$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/ammo/$AmmoParticle" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $AmmoParticle {

constructor()

public "setParticleOptions"(arg0: $ParticleOptions$Type): void
public "getDelta"(): $Vector3f
public "getSpeed"(): float
public "getParticleOptions"(): $ParticleOptions
public "getCount"(): integer
public "getLifeTime"(): integer
public "getName"(): string
set "particleOptions"(value: $ParticleOptions$Type)
get "delta"(): $Vector3f
get "speed"(): float
get "particleOptions"(): $ParticleOptions
get "count"(): integer
get "lifeTime"(): integer
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoParticle$Type = ($AmmoParticle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoParticle_ = $AmmoParticle$Type;
}}
declare module "packages/com/tacz/guns/client/resource/index/$ClientGunIndex" {
import {$IClientGun, $IClientGun$Type} from "packages/dev/aika/taczjs/interfaces/client/$IClientGun"
import {$GunData, $GunData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunData"
import {$GunDisplayInstance, $GunDisplayInstance$Type} from "packages/com/tacz/guns/client/resource/$GunDisplayInstance"
import {$GunIndexPOJO, $GunIndexPOJO$Type} from "packages/com/tacz/guns/resource/pojo/$GunIndexPOJO"

export class $ClientGunIndex implements $IClientGun {


public "getGunData"(): $GunData
public "getItemType"(): string
public "setVanillaInteract"(v: boolean): void
public "isVanillaInteract"(): boolean
public "getDefaultDisplay"(): $GunDisplayInstance
public "getName"(): string
public static "getInstance"(arg0: $GunIndexPOJO$Type): $ClientGunIndex
public "getType"(): string
get "gunData"(): $GunData
get "itemType"(): string
set "vanillaInteract"(value: boolean)
get "vanillaInteract"(): boolean
get "defaultDisplay"(): $GunDisplayInstance
get "name"(): string
get "type"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientGunIndex$Type = ($ClientGunIndex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientGunIndex_ = $ClientGunIndex$Type;
}}
declare module "packages/com/tacz/guns/api/entity/$ReloadState$StateType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ReloadState$StateType extends $Enum<($ReloadState$StateType)> {
static readonly "NOT_RELOADING": $ReloadState$StateType
static readonly "EMPTY_RELOAD_FEEDING": $ReloadState$StateType
static readonly "EMPTY_RELOAD_FINISHING": $ReloadState$StateType
static readonly "TACTICAL_RELOAD_FEEDING": $ReloadState$StateType
static readonly "TACTICAL_RELOAD_FINISHING": $ReloadState$StateType


public "isReloadingEmpty"(): boolean
public "isReloadingTactical"(): boolean
public "isReloadFinishing"(): boolean
public "isReloading"(): boolean
public static "values"(): ($ReloadState$StateType)[]
public static "valueOf"(arg0: string): $ReloadState$StateType
get "reloadingEmpty"(): boolean
get "reloadingTactical"(): boolean
get "reloadFinishing"(): boolean
get "reloading"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadState$StateType$Type = (("empty_reload_feeding") | ("empty_reload_finishing") | ("tactical_reload_finishing") | ("tactical_reload_feeding") | ("not_reloading")) | ($ReloadState$StateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReloadState$StateType_ = $ReloadState$StateType$Type;
}}
declare module "packages/com/tacz/guns/resource/modifier/$AttachmentCacheProperty" {
import {$GunData, $GunData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GunProperty, $GunProperty$Type} from "packages/com/tacz/guns/api/$GunProperty"

export class $AttachmentCacheProperty {

constructor()

public "setCache"<T>(arg0: $GunProperty$Type<(T)>, arg1: T): void
public "getCache"<T>(arg0: $GunProperty$Type<(T)>): T
public "getCache"<T>(arg0: string): T
public "eval"(arg0: $ItemStack$Type, arg1: $GunData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentCacheProperty$Type = ($AttachmentCacheProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentCacheProperty_ = $AttachmentCacheProperty$Type;
}}
declare module "packages/com/tacz/guns/api/item/builder/$BlockItemBuilder" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BlockItemBuilder {


public "build"(): $ItemStack
public "setId"(arg0: $ResourceLocation$Type): $BlockItemBuilder
public "setCount"(arg0: integer): $BlockItemBuilder
public static "create"(arg0: $ItemLike$Type): $BlockItemBuilder
set "id"(value: $ResourceLocation$Type)
set "count"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemBuilder$Type = ($BlockItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemBuilder_ = $BlockItemBuilder$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$GunDamageSourcePart" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GunDamageSourcePart extends $Enum<($GunDamageSourcePart)> {
static readonly "NON_ARMOR_PIERCING": $GunDamageSourcePart
static readonly "ARMOR_PIERCING": $GunDamageSourcePart


public static "values"(): ($GunDamageSourcePart)[]
public static "valueOf"(arg0: string): $GunDamageSourcePart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunDamageSourcePart$Type = (("armor_piercing") | ("non_armor_piercing")) | ($GunDamageSourcePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunDamageSourcePart_ = $GunDamageSourcePart$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$GunDefaultMeleeData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GunDefaultMeleeData {

constructor()

public "getDistance"(): float
public "getCooldown"(): float
public "getRangeAngle"(): float
public "getKnockback"(): float
public "getAnimationType"(): string
public "getPrepTime"(): float
public "getDamage"(): float
get "distance"(): float
get "cooldown"(): float
get "rangeAngle"(): float
get "knockback"(): float
get "animationType"(): string
get "prepTime"(): float
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunDefaultMeleeData$Type = ($GunDefaultMeleeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunDefaultMeleeData_ = $GunDefaultMeleeData$Type;
}}
declare module "packages/com/tacz/guns/api/item/builder/$AttachmentItemBuilder" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AttachmentItemBuilder {


/**
 * 
 * @deprecated
 */
public "setSkinId"(arg0: $ResourceLocation$Type): $AttachmentItemBuilder
public "build"(): $ItemStack
public "setId"(arg0: $ResourceLocation$Type): $AttachmentItemBuilder
public "setCount"(arg0: integer): $AttachmentItemBuilder
public static "create"(): $AttachmentItemBuilder
set "skinId"(value: $ResourceLocation$Type)
set "id"(value: $ResourceLocation$Type)
set "count"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentItemBuilder$Type = ($AttachmentItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentItemBuilder_ = $AttachmentItemBuilder$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$ObjectAnimation" {
import {$AnimationListenerSupplier, $AnimationListenerSupplier$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListenerSupplier"
import {$ObjectAnimationSoundChannel, $ObjectAnimationSoundChannel$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimationSoundChannel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ObjectAnimationChannel, $ObjectAnimationChannel$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimationChannel"
import {$ObjectAnimation$PlayType, $ObjectAnimation$PlayType$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimation$PlayType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ObjectAnimation {
readonly "name": string
 "playType": $ObjectAnimation$PlayType

constructor(arg0: $ObjectAnimation$Type)

public "getSoundChannel"(): $ObjectAnimationSoundChannel
public "applyAnimationListeners"(arg0: $AnimationListenerSupplier$Type): void
public "getMaxEndTimeS"(): float
public "getChannels"(): $Map<(string), ($List<($ObjectAnimationChannel)>)>
public "update"(arg0: boolean, arg1: float): void
get "soundChannel"(): $ObjectAnimationSoundChannel
get "maxEndTimeS"(): float
get "channels"(): $Map<(string), ($List<($ObjectAnimationChannel)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectAnimation$Type = ($ObjectAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectAnimation_ = $ObjectAnimation$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$GunReloadTime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GunReloadTime {

constructor()

public "getEmptyTime"(): float
public "getTacticalTime"(): float
get "emptyTime"(): float
get "tacticalTime"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunReloadTime$Type = ($GunReloadTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunReloadTime_ = $GunReloadTime$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$GunData" {
import {$FireSound, $FireSound$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$FireSound"
import {$GunRecoil, $GunRecoil$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunRecoil"
import {$GunMeleeData, $GunMeleeData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunMeleeData"
import {$MoveSpeed, $MoveSpeed$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$MoveSpeed"
import {$InaccuracyType, $InaccuracyType$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$InaccuracyType"
import {$ChargeData, $ChargeData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$ChargeData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Bolt, $Bolt$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$Bolt"
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$GunReloadData, $GunReloadData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunReloadData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BurstData, $BurstData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$BurstData"
import {$BulletData, $BulletData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$BulletData"
import {$AttachmentData, $AttachmentData$Type} from "packages/com/tacz/guns/resource/pojo/data/attachment/$AttachmentData"
import {$GunHeatData, $GunHeatData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunHeatData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$GunFireModeAdjustData, $GunFireModeAdjustData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunFireModeAdjustData"

export class $GunData {

constructor()

public "getReloadData"(): $GunReloadData
public "getBoltActionTime"(): float
public "getBoltFeedTime"(): float
public "getBolt"(): $Bolt
public "getMeleeData"(): $GunMeleeData
public "getAmmoId"(): $ResourceLocation
public "isCanCrawl"(): boolean
public "getRoundsPerMinute"(arg0: $FireMode$Type): integer
public "getRoundsPerMinute"(): integer
public "hasHeatData"(): boolean
public "getFireModeSet"(): $List<($FireMode)>
public "getAmmoAmount"(): integer
public "getAllowAttachments"(): $List<($AttachmentType)>
public "getHeatData"(): $GunHeatData
public "getBuiltInAttachments"(): $Map<($AttachmentType), ($ResourceLocation)>
public "getAimTime"(): float
public "getFireModeAdjustData"(arg0: $FireMode$Type): $GunFireModeAdjustData
public "getBulletData"(): $BulletData
public "getRecoil"(): $GunRecoil
public "getMoveSpeed"(): $MoveSpeed
public "getExtendedMagAmmoAmount"(): (integer)[]
public "setInaccuracy"(arg0: $Map$Type<($InaccuracyType$Type), (float)>): void
public "getScriptParam"(): $Map<(string), (any)>
public "canSlide"(): boolean
public "getChargeData"(arg0: $FireMode$Type): $ChargeData
public "getDrawTime"(): float
public "getPutAwayTime"(): float
public "getSprintTime"(): float
public "getFireSound"(): $FireSound
public "getBurstData"(): $BurstData
public "getCrawlRecoilMultiplier"(): float
public "getHurtBobTweakMultiplier"(): float
public "getExclusiveAttachments"(): $Map<($ResourceLocation), ($AttachmentData)>
public "getShootInterval"(arg0: $LivingEntity$Type, arg1: $FireMode$Type, arg2: $ItemStack$Type): long
public "getBurstShootInterval"(): long
public "getInaccuracy"(arg0: $InaccuracyType$Type, arg1: float): float
public "getInaccuracy"(): $Map<($InaccuracyType), (float)>
public "getInaccuracy"(arg0: $InaccuracyType$Type): float
public "getScript"(): $ResourceLocation
public "getWeight"(): float
get "reloadData"(): $GunReloadData
get "boltActionTime"(): float
get "boltFeedTime"(): float
get "bolt"(): $Bolt
get "meleeData"(): $GunMeleeData
get "ammoId"(): $ResourceLocation
get "canCrawl"(): boolean
get "roundsPerMinute"(): integer
get "fireModeSet"(): $List<($FireMode)>
get "ammoAmount"(): integer
get "allowAttachments"(): $List<($AttachmentType)>
get "heatData"(): $GunHeatData
get "builtInAttachments"(): $Map<($AttachmentType), ($ResourceLocation)>
get "aimTime"(): float
get "bulletData"(): $BulletData
get "recoil"(): $GunRecoil
get "moveSpeed"(): $MoveSpeed
get "extendedMagAmmoAmount"(): (integer)[]
set "inaccuracy"(value: $Map$Type<($InaccuracyType$Type), (float)>)
get "scriptParam"(): $Map<(string), (any)>
get "drawTime"(): float
get "putAwayTime"(): float
get "sprintTime"(): float
get "fireSound"(): $FireSound
get "burstData"(): $BurstData
get "crawlRecoilMultiplier"(): float
get "hurtBobTweakMultiplier"(): float
get "exclusiveAttachments"(): $Map<($ResourceLocation), ($AttachmentData)>
get "burstShootInterval"(): long
get "inaccuracy"(): $Map<($InaccuracyType), (float)>
get "script"(): $ResourceLocation
get "weight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunData$Type = ($GunData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunData_ = $GunData$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunDrawWrapper" {
import {$GunDrawEvent, $GunDrawEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunDrawEvent"
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $TimelessForgeEventWrappers$GunDrawWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($GunDrawEvent)> {

 "getLogicalSide"(): $LogicalSide
 "getPreviousGunItem"(): $ItemStack
 "getCurrentGunItem"(): $ItemStack
 "getEntity"(): $LivingEntity
 "getForgeEvent"(): $GunDrawEvent

(): $LogicalSide
}

export namespace $TimelessForgeEventWrappers$GunDrawWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$GunDrawWrapper$Type = ($TimelessForgeEventWrappers$GunDrawWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$GunDrawWrapper_ = $TimelessForgeEventWrappers$GunDrawWrapper$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$EntityHurtByGunEvent$Post" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EntityHurtByGunEvent, $EntityHurtByGunEvent$Type} from "packages/com/tacz/guns/api/event/common/$EntityHurtByGunEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityHurtByGunEvent$Post extends $EntityHurtByGunEvent {

constructor(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $LivingEntity$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: float, arg6: $Pair$Type<($DamageSource$Type), ($DamageSource$Type)>, arg7: boolean, arg8: float, arg9: $LogicalSide$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHurtByGunEvent$Post$Type = ($EntityHurtByGunEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityHurtByGunEvent$Post_ = $EntityHurtByGunEvent$Post$Type;
}}
declare module "packages/com/tacz/guns/api/client/event/$RenderItemInHandBobEvent$BobView" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$RenderItemInHandBobEvent, $RenderItemInHandBobEvent$Type} from "packages/com/tacz/guns/api/client/event/$RenderItemInHandBobEvent"

export class $RenderItemInHandBobEvent$BobView extends $RenderItemInHandBobEvent {

constructor()

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderItemInHandBobEvent$BobView$Type = ($RenderItemInHandBobEvent$BobView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderItemInHandBobEvent$BobView_ = $RenderItemInHandBobEvent$BobView$Type;
}}
declare module "packages/com/tacz/guns/api/entity/$IGunOperator" {
import {$ReloadState, $ReloadState$Type} from "packages/com/tacz/guns/api/entity/$ReloadState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ShootResult, $ShootResult$Type} from "packages/com/tacz/guns/api/entity/$ShootResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AttachmentCacheProperty, $AttachmentCacheProperty$Type} from "packages/com/tacz/guns/resource/modifier/$AttachmentCacheProperty"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ShooterDataHolder, $ShooterDataHolder$Type} from "packages/com/tacz/guns/entity/shooter/$ShooterDataHolder"

export interface $IGunOperator {

 "aim"(arg0: boolean): void
 "reload"(): void
 "draw"(arg0: $Supplier$Type<($ItemStack$Type)>): void
 "melee"(): void
 "getCacheProperty"(): $AttachmentCacheProperty
 "getSynShootCoolDown"(): long
 "getSynMeleeCoolDown"(): long
 "getSynDrawCoolDown"(): long
 "getSynIsBolting"(): boolean
 "getSynReloadState"(): $ReloadState
 "getSynAimingProgress"(): float
 "getSynSprintTime"(): float
 "getSynIsAiming"(): boolean
 "initialData"(): void
 "bolt"(): void
 "cancelReload"(): void
 "shoot"(arg0: $Supplier$Type<(float)>, arg1: $Supplier$Type<(float)>, arg2: long): $ShootResult
 "shoot"(arg0: $Supplier$Type<(float)>, arg1: $Supplier$Type<(float)>): $ShootResult
 "shoot"(arg0: $Supplier$Type<(float)>, arg1: $Supplier$Type<(float)>, arg2: long, arg3: float): $ShootResult
 "needCheckAmmo"(): boolean
 "consumesAmmoOrNot"(): boolean
 "getProcessedSprintStatus"(arg0: boolean): boolean
 "crawl"(arg0: boolean): void
 "updateCacheProperty"(arg0: $AttachmentCacheProperty$Type): void
 "getDataHolder"(): $ShooterDataHolder
 "nextBulletIsTracer"(arg0: integer): boolean
 "fireSelect"(): void
 "zoom"(): void
}

export namespace $IGunOperator {
function fromLivingEntity(arg0: $LivingEntity$Type): $IGunOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGunOperator$Type = ($IGunOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGunOperator_ = $IGunOperator$Type;
}}
declare module "packages/com/tacz/guns/entity/shooter/$ShooterDataHolder" {
import {$ReloadState$StateType, $ReloadState$StateType$Type} from "packages/com/tacz/guns/api/entity/$ReloadState$StateType"
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AttachmentCacheProperty, $AttachmentCacheProperty$Type} from "packages/com/tacz/guns/resource/modifier/$AttachmentCacheProperty"

export class $ShooterDataHolder {
 "baseTimestamp": long
 "shootTimestamp": long
 "lastShootTimestamp": long
 "meleeTimestamp": long
 "meleePrepTickCount": integer
 "drawTimestamp": long
 "boltTimestamp": long
 "isBolting": boolean
 "aimingProgress": float
 "aimingTimestamp": long
 "isAiming": boolean
 "reloadTimestamp": long
 "reloadStateType": $ReloadState$StateType
 "currentGunItem": $Supplier<($ItemStack)>
 "currentPutAwayTimeS": float
 "sprintTimeS": float
 "sprintTimestamp": long
 "knockbackStrength": double
 "shootCount": integer
 "chargeProgress": float
 "isCrawling": boolean
 "scriptData": $LuaValue
 "heatTimestamp": long
 "cacheProperty": $AttachmentCacheProperty

constructor()

public "initialData"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShooterDataHolder$Type = ($ShooterDataHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShooterDataHolder_ = $ShooterDataHolder$Type;
}}
declare module "packages/com/tacz/guns/client/animation/statemachine/$GunAnimationStateContext" {
import {$ItemAnimationStateContext, $ItemAnimationStateContext$Type} from "packages/com/tacz/guns/client/animation/statemachine/$ItemAnimationStateContext"
import {$LuaNbtAccessor, $LuaNbtAccessor$Type} from "packages/com/tacz/guns/api/util/$LuaNbtAccessor"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"

export class $GunAnimationStateContext extends $ItemAnimationStateContext {

constructor()

public "adjustClientShootInterval"(arg0: long): void
public "isInputUp"(): boolean
public "isInputDown"(): boolean
public "isInputLeft"(): boolean
public "isInputRight"(): boolean
public "isInputJumping"(): boolean
public "shouldSlide"(): boolean
public "anchorWalkDist"(): void
public "getWalkDist"(): float
public "popShellFrom"(arg0: integer): void
public "getStateMachineParams"(): $LuaTable
public "getNbtAccessor"(): $LuaNbtAccessor
public "getChargeThreshold"(): float
public "getLastShootTimestamp"(): long
public "getAimingProgress"(): float
public "getMaxAmmoCount"(): integer
public "getMagExtentLevel"(): integer
public "hasAmmoToConsume"(): boolean
public "getCurrentTimestamp"(): long
public "isCrouching"(): boolean
public "isOverHeat"(): boolean
public "getHeatProgress"(): float
public "isOnGround"(): boolean
public "getAmmoCount"(): integer
public "getReloadStateType"(): integer
public "getFireMode"(): integer
public "hasBulletInBarrel"(): boolean
public "getShootInterval"(): long
public "getAttachment"(arg0: string): string
public "getMaxCharge"(): float
public "getChargeProgress"(): float
public "isCharging"(): boolean
public "isCrawl"(): boolean
public "getShootCoolDown"(): long
public "isAiming"(): boolean
public "setCurrentGunItem"(arg0: $ItemStack$Type): void
get "inputUp"(): boolean
get "inputDown"(): boolean
get "inputLeft"(): boolean
get "inputRight"(): boolean
get "inputJumping"(): boolean
get "walkDist"(): float
get "stateMachineParams"(): $LuaTable
get "nbtAccessor"(): $LuaNbtAccessor
get "chargeThreshold"(): float
get "lastShootTimestamp"(): long
get "aimingProgress"(): float
get "maxAmmoCount"(): integer
get "magExtentLevel"(): integer
get "currentTimestamp"(): long
get "crouching"(): boolean
get "overHeat"(): boolean
get "heatProgress"(): float
get "onGround"(): boolean
get "ammoCount"(): integer
get "reloadStateType"(): integer
get "fireMode"(): integer
get "shootInterval"(): long
get "maxCharge"(): float
get "chargeProgress"(): float
get "charging"(): boolean
get "crawl"(): boolean
get "shootCoolDown"(): long
get "aiming"(): boolean
set "currentGunItem"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunAnimationStateContext$Type = ($GunAnimationStateContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunAnimationStateContext_ = $GunAnimationStateContext$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$ExplosionData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ExplosionData {

constructor(arg0: boolean, arg1: float, arg2: float, arg3: boolean, arg4: float, arg5: boolean)

public "isExplode"(): boolean
public "isKnockback"(): boolean
public "isDestroyBlock"(): boolean
public "getRadius"(): float
public "getDelay"(): float
public "getDamage"(): float
get "explode"(): boolean
get "knockback"(): boolean
get "destroyBlock"(): boolean
get "radius"(): float
get "delay"(): float
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionData$Type = ($ExplosionData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionData_ = $ExplosionData$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunReloadWrapper" {
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$GunReloadEvent, $GunReloadEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunReloadEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $TimelessForgeEventWrappers$GunReloadWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($GunReloadEvent)> {

 "getLogicalSide"(): $LogicalSide
 "getGunItemStack"(): $ItemStack
 "getEntity"(): $LivingEntity
 "getForgeEvent"(): $GunReloadEvent

(): $LogicalSide
}

export namespace $TimelessForgeEventWrappers$GunReloadWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$GunReloadWrapper$Type = ($TimelessForgeEventWrappers$GunReloadWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$GunReloadWrapper_ = $TimelessForgeEventWrappers$GunReloadWrapper$Type;
}}
declare module "packages/com/tacz/guns/block/$TargetBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TargetBlock extends $BaseEntityBlock {
static readonly "OUTPUT_POWER": $IntegerProperty
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "STAND": $BooleanProperty
static readonly "BOX_BOTTOM_STAND_X": $VoxelShape
static readonly "BOX_BOTTOM_STAND_Z": $VoxelShape
static readonly "BOX_BOTTOM_DOWN": $VoxelShape
static readonly "BOX_UPPER_X": $VoxelShape
static readonly "BOX_UPPER_Z": $VoxelShape
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

public static "getRedstoneStrength"(arg0: $BlockHitResult$Type, arg1: boolean): integer
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "onProjectileHit"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockHitResult$Type, arg3: $Projectile$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetBlock$Type = ($TargetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetBlock_ = $TargetBlock$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$GunMeleeData" {
import {$GunDefaultMeleeData, $GunDefaultMeleeData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunDefaultMeleeData"

export class $GunMeleeData {

constructor()

public "getDistance"(): float
public "getCooldown"(): float
public "getDefaultMeleeData"(): $GunDefaultMeleeData
get "distance"(): float
get "cooldown"(): float
get "defaultMeleeData"(): $GunDefaultMeleeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunMeleeData$Type = ($GunMeleeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunMeleeData_ = $GunMeleeData$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$GunFireEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $GunFireEvent extends $Event implements $KubeJSGunEventPoster<($GunFireEvent)> {

constructor(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LogicalSide$Type)
constructor()

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getShooter"(): $LivingEntity
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $GunFireEvent$Type): void
public "postClientEventToKubeJS"(arg0: $GunFireEvent$Type): void
public "postServerEventToKubeJS"(arg0: $GunFireEvent$Type): void
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "shooter"(): $LivingEntity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunFireEvent$Type = ($GunFireEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunFireEvent_ = $GunFireEvent$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/attachment/$Modifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Modifier {

constructor()

public "getAddend"(): double
/**
 * 
 * @deprecated
 */
public "setAddend"(arg0: double): void
public "getMultiplier"(): double
public "getPercent"(): double
/**
 * 
 * @deprecated
 */
public "setPercent"(arg0: double): void
public "getFunction"(): string
get "addend"(): double
set "addend"(value: double)
get "multiplier"(): double
get "percent"(): double
set "percent"(value: double)
get "function"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Modifier$Type = ($Modifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Modifier_ = $Modifier$Type;
}}
declare module "packages/com/tacz/guns/client/model/$IFunctionalRenderer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export interface $IFunctionalRenderer {

 "render"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $ItemDisplayContext$Type, arg3: integer, arg4: integer): void

(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $ItemDisplayContext$Type, arg3: integer, arg4: integer): void
}

export namespace $IFunctionalRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFunctionalRenderer$Type = ($IFunctionalRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFunctionalRenderer_ = $IFunctionalRenderer$Type;
}}
declare module "packages/com/tacz/guns/client/resource/$GunDisplayInstance" {
import {$GunAnimationStateContext, $GunAnimationStateContext$Type} from "packages/com/tacz/guns/client/animation/statemachine/$GunAnimationStateContext"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$AmmoParticle, $AmmoParticle$Type} from "packages/com/tacz/guns/client/resource/pojo/display/ammo/$AmmoParticle"
import {$ControllableData, $ControllableData$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$ControllableData"
import {$MuzzleFlash, $MuzzleFlash$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$MuzzleFlash"
import {$AmmoCountStyle, $AmmoCountStyle$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$AmmoCountStyle"
import {$GunTransform, $GunTransform$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$GunTransform"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BedrockGunModel, $BedrockGunModel$Type} from "packages/com/tacz/guns/client/model/$BedrockGunModel"
import {$Int2ObjectArrayMap, $Int2ObjectArrayMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectArrayMap"
import {$LaserConfig, $LaserConfig$Type} from "packages/com/tacz/guns/client/resource/pojo/display/$LaserConfig"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$LuaAnimationStateMachine, $LuaAnimationStateMachine$Type} from "packages/com/tacz/guns/api/client/animation/statemachine/$LuaAnimationStateMachine"
import {$DamageStyle, $DamageStyle$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$DamageStyle"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GunDisplay, $GunDisplay$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$GunDisplay"
import {$LayerGunShow, $LayerGunShow$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$LayerGunShow"
import {$ShellEjection, $ShellEjection$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$ShellEjection"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $GunDisplayInstance {


public "getParticle"(): $AmmoParticle
public "is3rdFixedHand"(): boolean
public "warmUpModel"(): void
public "warmUpLod"(): void
public "warmUpRuntime"(): void
public "getThirdPersonAnimation"(): string
public "getPlayerAnimator3rd"(): $ResourceLocation
public "isShowCrosshair"(): boolean
public "getControllableData"(): $EnumMap<($FireMode), ($ControllableData)>
public "getAmmoCountStyle"(): $AmmoCountStyle
public "getDamageStyle"(): $DamageStyle
public "getLaserConfig"(): $LaserConfig
public "enablesTransparency"(): boolean
public "getZoomModelFov"(): float
public "getStateMachineParam"(): $LuaTable
public "getPreloadSounds"(): $List<($ResourceLocation)>
public "getShellEjection"(): $ShellEjection
public "getTracerColor"(): (float)[]
public "getMuzzleFlash"(): $MuzzleFlash
public "getOffhandShow"(): $LayerGunShow
public "getHotbarShow"(): $Int2ObjectArrayMap<($LayerGunShow)>
public "getGunModel"(): $BedrockGunModel
public "getLodModel"(): $Pair<($BedrockGunModel), ($ResourceLocation)>
public "getAnimationStateMachine"(): $LuaAnimationStateMachine<($GunAnimationStateContext)>
public "getSlotTexture"(): $ResourceLocation
public "getHUDTexture"(): $ResourceLocation
public "getHudEmptyTexture"(): $ResourceLocation
public "getSounds"(arg0: string): $ResourceLocation
public "getModelTexture"(): $ResourceLocation
public "getTransform"(): $GunTransform
public "getIronZoom"(): float
public static "create"(arg0: $ResourceLocation$Type, arg1: $GunDisplay$Type): $GunDisplayInstance
get "particle"(): $AmmoParticle
get "3rdFixedHand"(): boolean
get "thirdPersonAnimation"(): string
get "playerAnimator3rd"(): $ResourceLocation
get "showCrosshair"(): boolean
get "controllableData"(): $EnumMap<($FireMode), ($ControllableData)>
get "ammoCountStyle"(): $AmmoCountStyle
get "damageStyle"(): $DamageStyle
get "laserConfig"(): $LaserConfig
get "zoomModelFov"(): float
get "stateMachineParam"(): $LuaTable
get "preloadSounds"(): $List<($ResourceLocation)>
get "shellEjection"(): $ShellEjection
get "tracerColor"(): (float)[]
get "muzzleFlash"(): $MuzzleFlash
get "offhandShow"(): $LayerGunShow
get "hotbarShow"(): $Int2ObjectArrayMap<($LayerGunShow)>
get "gunModel"(): $BedrockGunModel
get "lodModel"(): $Pair<($BedrockGunModel), ($ResourceLocation)>
get "animationStateMachine"(): $LuaAnimationStateMachine<($GunAnimationStateContext)>
get "slotTexture"(): $ResourceLocation
get "hUDTexture"(): $ResourceLocation
get "hudEmptyTexture"(): $ResourceLocation
get "modelTexture"(): $ResourceLocation
get "transform"(): $GunTransform
get "ironZoom"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunDisplayInstance$Type = ($GunDisplayInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunDisplayInstance_ = $GunDisplayInstance$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/$TransformScale" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"

export class $TransformScale {

constructor()

public static "getGunDefault"(): $TransformScale
public static "getAmmoDefault"(): $TransformScale
public "getGround"(): $Vector3f
public "getThirdPerson"(): $Vector3f
public "getFixed"(): $Vector3f
get "gunDefault"(): $TransformScale
get "ammoDefault"(): $TransformScale
get "ground"(): $Vector3f
get "thirdPerson"(): $Vector3f
get "fixed"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformScale$Type = ($TransformScale);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformScale_ = $TransformScale$Type;
}}
declare module "packages/com/tacz/guns/api/item/nbt/$AmmoBoxItemDataAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IAmmoBox, $IAmmoBox$Type} from "packages/com/tacz/guns/api/item/$IAmmoBox"

export interface $AmmoBoxItemDataAccessor extends $IAmmoBox {

 "isAmmoBoxOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getAmmoCount"(arg0: $ItemStack$Type): integer
 "setAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
 "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
 "isAllTypeCreative"(arg0: $ItemStack$Type): boolean
 "getAmmoLevel"(arg0: $ItemStack$Type): integer
 "setAmmoLevel"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
 "setCreative"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "isCreative"(arg0: $ItemStack$Type): boolean
}

export namespace $AmmoBoxItemDataAccessor {
const AMMO_ID_TAG: string
const AMMO_COUNT_TAG: string
const CREATIVE_TAG: string
const ALL_TYPE_CREATIVE_TAG: string
const LEVEL_TAG: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoBoxItemDataAccessor$Type = ($AmmoBoxItemDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoBoxItemDataAccessor_ = $AmmoBoxItemDataAccessor$Type;
}}
declare module "packages/com/tacz/guns/client/model/bedrock/$ModelRendererWrapper" {
import {$BedrockPart, $BedrockPart$Type} from "packages/com/tacz/guns/client/model/bedrock/$BedrockPart"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $ModelRendererWrapper {

constructor(arg0: $BedrockPart$Type)

public "setScaleX"(arg0: float): void
public "setScaleY"(arg0: float): void
public "setScaleZ"(arg0: float): void
public "getOffsetX"(): float
public "getOffsetZ"(): float
public "getModelRenderer"(): $BedrockPart
public "setOffsetX"(arg0: float): void
public "setOffsetY"(arg0: float): void
public "setOffsetZ"(arg0: float): void
public "getAdditionalQuaternion"(): $Quaternionf
public "getOffsetY"(): float
public "getScaleX"(): float
public "getScaleY"(): float
public "getScaleZ"(): float
public "getRotateAngleX"(): float
public "setRotateAngleX"(arg0: float): void
public "getRotateAngleY"(): float
public "setRotateAngleY"(arg0: float): void
public "getRotateAngleZ"(): float
public "setRotateAngleZ"(arg0: float): void
public "addOffsetX"(arg0: float): void
public "addOffsetY"(arg0: float): void
public "addOffsetZ"(arg0: float): void
public "getRotationPointX"(): float
public "getRotationPointY"(): float
public "getRotationPointZ"(): float
public "getInitRotateAngleX"(): float
public "getInitRotateAngleY"(): float
public "getInitRotateAngleZ"(): float
public "setAdditionalQuaternion"(arg0: $Quaternionf$Type): void
public "setHidden"(arg0: boolean): void
public "render"(arg0: $PoseStack$Type, arg1: $ItemDisplayContext$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer): void
public "isHidden"(): boolean
set "scaleX"(value: float)
set "scaleY"(value: float)
set "scaleZ"(value: float)
get "offsetX"(): float
get "offsetZ"(): float
get "modelRenderer"(): $BedrockPart
set "offsetX"(value: float)
set "offsetY"(value: float)
set "offsetZ"(value: float)
get "additionalQuaternion"(): $Quaternionf
get "offsetY"(): float
get "scaleX"(): float
get "scaleY"(): float
get "scaleZ"(): float
get "rotateAngleX"(): float
set "rotateAngleX"(value: float)
get "rotateAngleY"(): float
set "rotateAngleY"(value: float)
get "rotateAngleZ"(): float
set "rotateAngleZ"(value: float)
get "rotationPointX"(): float
get "rotationPointY"(): float
get "rotationPointZ"(): float
get "initRotateAngleX"(): float
get "initRotateAngleY"(): float
get "initRotateAngleZ"(): float
set "additionalQuaternion"(value: $Quaternionf$Type)
set "hidden"(value: boolean)
get "hidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelRendererWrapper$Type = ($ModelRendererWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelRendererWrapper_ = $ModelRendererWrapper$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$AnimationController" {
import {$AnimationPlan, $AnimationPlan$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationPlan"
import {$AnimationListenerSupplier, $AnimationListenerSupplier$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListenerSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ObjectAnimation, $ObjectAnimation$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimation"
import {$ObjectAnimation$PlayType, $ObjectAnimation$PlayType$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimation$PlayType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ObjectAnimationRunner, $ObjectAnimationRunner$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimationRunner"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"

export class $AnimationController {

constructor(arg0: $List$Type<($ObjectAnimation$Type)>, arg1: $AnimationListenerSupplier$Type)

public "removeAnimation"(arg0: integer): void
public "queueAnimation"(arg0: integer, arg1: $Queue$Type<($AnimationPlan$Type)>): void
public "runAnimation"(arg0: integer, arg1: string, arg2: $ObjectAnimation$PlayType$Type, arg3: float): void
public "setBlending"(arg0: integer, arg1: boolean): void
public "containPrototype"(arg0: string): boolean
public "setUpdatingTrackArray"(arg0: $Iterable$Type<(integer)>): void
public "getUpdatingTrackArray"(): $Iterable<(integer)>
public "providePrototypeIfAbsent"(arg0: string, arg1: $Supplier$Type<($ObjectAnimation$Type)>): void
public "updateSoundOnly"(): void
public "getAnimation"(arg0: integer): $ObjectAnimationRunner
public "update"(): void
set "updatingTrackArray"(value: $Iterable$Type<(integer)>)
get "updatingTrackArray"(): $Iterable<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$Type = ($AnimationController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController_ = $AnimationController$Type;
}}
declare module "packages/com/tacz/guns/api/event/server/$AmmoHitBlockEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$EntityKineticBullet, $EntityKineticBullet$Type} from "packages/com/tacz/guns/entity/$EntityKineticBullet"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $AmmoHitBlockEvent extends $Event implements $KubeJSGunEventPoster<($AmmoHitBlockEvent)> {

constructor(arg0: $Level$Type, arg1: $BlockHitResult$Type, arg2: $BlockState$Type, arg3: $EntityKineticBullet$Type)
constructor()

public "getHitResult"(): $BlockHitResult
public "getAmmo"(): $EntityKineticBullet
public "getLevel"(): $Level
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "getState"(): $BlockState
public "postEventToKubeJS"(arg0: $AmmoHitBlockEvent$Type): void
public "postClientEventToKubeJS"(arg0: $AmmoHitBlockEvent$Type): void
public "postServerEventToKubeJS"(arg0: $AmmoHitBlockEvent$Type): void
get "hitResult"(): $BlockHitResult
get "ammo"(): $EntityKineticBullet
get "level"(): $Level
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "state"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoHitBlockEvent$Type = ($AmmoHitBlockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoHitBlockEvent_ = $AmmoHitBlockEvent$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$AttachmentPropertyEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AttachmentCacheProperty, $AttachmentCacheProperty$Type} from "packages/com/tacz/guns/resource/modifier/$AttachmentCacheProperty"

export class $AttachmentPropertyEvent extends $Event implements $KubeJSGunEventPoster<($AttachmentPropertyEvent)> {

constructor(arg0: $ItemStack$Type, arg1: $AttachmentCacheProperty$Type)
constructor()

public "getGunItem"(): $ItemStack
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "getCacheProperty"(): $AttachmentCacheProperty
public "postEventToKubeJS"(arg0: $AttachmentPropertyEvent$Type): void
public "postClientEventToKubeJS"(arg0: $AttachmentPropertyEvent$Type): void
public "postServerEventToKubeJS"(arg0: $AttachmentPropertyEvent$Type): void
get "gunItem"(): $ItemStack
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "cacheProperty"(): $AttachmentCacheProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentPropertyEvent$Type = ($AttachmentPropertyEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentPropertyEvent_ = $AttachmentPropertyEvent$Type;
}}
declare module "packages/com/tacz/guns/api/client/event/$RenderLevelBobEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"

export class $RenderLevelBobEvent extends $Event implements $KubeJSGunEventPoster<($RenderLevelBobEvent)> {

constructor()

public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $RenderLevelBobEvent$Type): void
public "postClientEventToKubeJS"(arg0: $RenderLevelBobEvent$Type): void
public "postServerEventToKubeJS"(arg0: $RenderLevelBobEvent$Type): void
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLevelBobEvent$Type = ($RenderLevelBobEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderLevelBobEvent_ = $RenderLevelBobEvent$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$Align" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Align extends $Enum<($Align)> {
static readonly "LEFT": $Align
static readonly "CENTER": $Align
static readonly "RIGHT": $Align


public static "values"(): ($Align)[]
public static "valueOf"(arg0: string): $Align
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Align$Type = (("left") | ("center") | ("right")) | ($Align);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Align_ = $Align$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/model/$BonesItem" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CubesItem, $CubesItem$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$CubesItem"

export class $BonesItem {

constructor()

public "getCubes"(): $List<($CubesItem)>
public "isMirror"(): boolean
public "getPivot"(): $List<(float)>
public "getRotation"(): $List<(float)>
public "getName"(): string
public "toString"(): string
public "getParent"(): string
get "cubes"(): $List<($CubesItem)>
get "mirror"(): boolean
get "pivot"(): $List<(float)>
get "rotation"(): $List<(float)>
get "name"(): string
get "parent"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BonesItem$Type = ($BonesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BonesItem_ = $BonesItem$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunDrawEventJS" {
import {$GunDrawEvent, $GunDrawEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunDrawEvent"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TimelessForgeEventWrappers$GunDrawWrapper, $TimelessForgeEventWrappers$GunDrawWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunDrawWrapper"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $GunKubeJSEvents$GunDrawEventJS extends $GunKubeJSEvents$GunEventJS<($GunDrawEvent)> implements $TimelessForgeEventWrappers$GunDrawWrapper {

constructor(arg0: $GunDrawEvent$Type)

public "getLogicalSide"(): $LogicalSide
public "getPreviousGunItem"(): $ItemStack
public "getCurrentGunItem"(): $ItemStack
public "getEntity"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "previousGunItem"(): $ItemStack
get "currentGunItem"(): $ItemStack
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$GunDrawEventJS$Type = ($GunKubeJSEvents$GunDrawEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$GunDrawEventJS_ = $GunKubeJSEvents$GunDrawEventJS$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$BeforeRenderHandWrapper" {
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BeforeRenderHandEvent, $BeforeRenderHandEvent$Type} from "packages/com/tacz/guns/api/client/event/$BeforeRenderHandEvent"

export interface $TimelessForgeEventWrappers$BeforeRenderHandWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($BeforeRenderHandEvent)> {

 "getPoseStack"(): $PoseStack
 "getForgeEvent"(): $BeforeRenderHandEvent

(): $PoseStack
}

export namespace $TimelessForgeEventWrappers$BeforeRenderHandWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$BeforeRenderHandWrapper$Type = ($TimelessForgeEventWrappers$BeforeRenderHandWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$BeforeRenderHandWrapper_ = $TimelessForgeEventWrappers$BeforeRenderHandWrapper$Type;
}}
declare module "packages/com/tacz/guns/api/client/event/$SwapItemWithOffHand" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"

export class $SwapItemWithOffHand extends $Event implements $KubeJSGunEventPoster<($SwapItemWithOffHand)> {

constructor()

public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $SwapItemWithOffHand$Type): void
public "postClientEventToKubeJS"(arg0: $SwapItemWithOffHand$Type): void
public "postServerEventToKubeJS"(arg0: $SwapItemWithOffHand$Type): void
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwapItemWithOffHand$Type = ($SwapItemWithOffHand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwapItemWithOffHand_ = $SwapItemWithOffHand$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/util/$GunSmithTableResultInfo$OutputGroupName" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GunSmithTableResultInfo$OutputGroupName extends $Enum<($GunSmithTableResultInfo$OutputGroupName)> {
static readonly "AMMO": $GunSmithTableResultInfo$OutputGroupName
static readonly "EXTENDED_MAG": $GunSmithTableResultInfo$OutputGroupName
static readonly "GRIP": $GunSmithTableResultInfo$OutputGroupName
static readonly "MG": $GunSmithTableResultInfo$OutputGroupName
static readonly "MUZZLE": $GunSmithTableResultInfo$OutputGroupName
static readonly "PISTOL": $GunSmithTableResultInfo$OutputGroupName
static readonly "RIFLE": $GunSmithTableResultInfo$OutputGroupName
static readonly "RPG": $GunSmithTableResultInfo$OutputGroupName
static readonly "SCOPE": $GunSmithTableResultInfo$OutputGroupName
static readonly "SHOTGUN": $GunSmithTableResultInfo$OutputGroupName
static readonly "SMG": $GunSmithTableResultInfo$OutputGroupName
static readonly "SNIPER": $GunSmithTableResultInfo$OutputGroupName
static readonly "STOCK": $GunSmithTableResultInfo$OutputGroupName


public "getName"(): string
public static "values"(): ($GunSmithTableResultInfo$OutputGroupName)[]
public static "valueOf"(arg0: string): $GunSmithTableResultInfo$OutputGroupName
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableResultInfo$OutputGroupName$Type = (("grip") | ("ammo") | ("extended_mag") | ("rpg") | ("muzzle") | ("pistol") | ("smg") | ("shotgun") | ("sniper") | ("scope") | ("mg") | ("stock") | ("rifle")) | ($GunSmithTableResultInfo$OutputGroupName);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableResultInfo$OutputGroupName_ = $GunSmithTableResultInfo$OutputGroupName$Type;
}}
declare module "packages/com/tacz/guns/item/$AmmoItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IAmmo, $IAmmo$Type} from "packages/com/tacz/guns/api/item/$IAmmo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AmmoItemDataAccessor, $AmmoItemDataAccessor$Type} from "packages/com/tacz/guns/api/item/nbt/$AmmoItemDataAccessor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AmmoItem extends $Item implements $AmmoItemDataAccessor {
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

public static "fillItemCategory"(): $NonNullList<($ItemStack)>
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "isAmmoOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
public static "getIAmmoOrNull"(arg0: $ItemStack$Type): $IAmmo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoItem$Type = ($AmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoItem_ = $AmmoItem$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$EntityKillByGunWrapper" {
import {$GunDamageSourcePart, $GunDamageSourcePart$Type} from "packages/com/tacz/guns/api/event/common/$GunDamageSourcePart"
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EntityKillByGunEvent, $EntityKillByGunEvent$Type} from "packages/com/tacz/guns/api/event/common/$EntityKillByGunEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $TimelessForgeEventWrappers$EntityKillByGunWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($EntityKillByGunEvent)> {

 "getBaseDamage"(): float
 "getAttacker"(): $LivingEntity
 "getGunDisplayId"(): $ResourceLocation
 "getDamageSource"(arg0: $GunDamageSourcePart$Type): $DamageSource
 "getBullet"(): $Entity
 "getHeadshotMultiplier"(): float
 "isHeadShot"(): boolean
 "getLogicalSide"(): $LogicalSide
 "getKilledEntity"(): $LivingEntity
 "getGunId"(): $ResourceLocation
 "getForgeEvent"(): $EntityKillByGunEvent

(): float
}

export namespace $TimelessForgeEventWrappers$EntityKillByGunWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$EntityKillByGunWrapper$Type = ($TimelessForgeEventWrappers$EntityKillByGunWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$EntityKillByGunWrapper_ = $TimelessForgeEventWrappers$EntityKillByGunWrapper$Type;
}}
declare module "packages/com/tacz/guns/api/item/$GunTabType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GunTabType extends $Enum<($GunTabType)> {
static readonly "PISTOL": $GunTabType
static readonly "SNIPER": $GunTabType
static readonly "RIFLE": $GunTabType
static readonly "SHOTGUN": $GunTabType
static readonly "SMG": $GunTabType
static readonly "RPG": $GunTabType
static readonly "MG": $GunTabType


public static "values"(): ($GunTabType)[]
public static "valueOf"(arg0: string): $GunTabType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunTabType$Type = (("shotgun") | ("sniper") | ("rpg") | ("mg") | ("pistol") | ("smg") | ("rifle")) | ($GunTabType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunTabType_ = $GunTabType$Type;
}}
declare module "packages/com/tacz/guns/api/item/builder/$AmmoItemBuilder" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AmmoItemBuilder {


public "build"(): $ItemStack
public "setId"(arg0: $ResourceLocation$Type): $AmmoItemBuilder
public "setCount"(arg0: integer): $AmmoItemBuilder
public static "create"(): $AmmoItemBuilder
set "id"(value: $ResourceLocation$Type)
set "count"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoItemBuilder$Type = ($AmmoItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoItemBuilder_ = $AmmoItemBuilder$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$MuzzleFlash" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MuzzleFlash {

constructor()

public "getTexture"(): $ResourceLocation
public "getScale"(): float
get "texture"(): $ResourceLocation
get "scale"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MuzzleFlash$Type = ($MuzzleFlash);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MuzzleFlash_ = $MuzzleFlash$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunFireEventJS" {
import {$GunFireEvent, $GunFireEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunFireEvent"
import {$TimelessForgeEventWrappers$GunFireWrapper, $TimelessForgeEventWrappers$GunFireWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunFireWrapper"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $GunKubeJSEvents$GunFireEventJS extends $GunKubeJSEvents$GunEventJS<($GunFireEvent)> implements $TimelessForgeEventWrappers$GunFireWrapper {

constructor(arg0: $GunFireEvent$Type)

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getShooter"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "shooter"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$GunFireEventJS$Type = ($GunKubeJSEvents$GunFireEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$GunFireEventJS_ = $GunKubeJSEvents$GunFireEventJS$Type;
}}
declare module "packages/com/tacz/guns/client/model/bedrock/$BedrockCube" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $BedrockCube {

 "compile"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float): void

(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float): void
}

export namespace $BedrockCube {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedrockCube$Type = ($BedrockCube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedrockCube_ = $BedrockCube$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunMeleeEventJS" {
import {$TimelessForgeEventWrappers$GunMeleeWrapper, $TimelessForgeEventWrappers$GunMeleeWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunMeleeWrapper"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$GunMeleeEvent, $GunMeleeEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunMeleeEvent"

export class $GunKubeJSEvents$GunMeleeEventJS extends $GunKubeJSEvents$GunEventJS<($GunMeleeEvent)> implements $TimelessForgeEventWrappers$GunMeleeWrapper {

constructor(arg0: $GunMeleeEvent$Type)

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getShooter"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "shooter"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$GunMeleeEventJS$Type = ($GunKubeJSEvents$GunMeleeEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$GunMeleeEventJS_ = $GunKubeJSEvents$GunMeleeEventJS$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/$GunIndexPOJO" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GunIndexPOJO {

constructor()

public "getDisplay"(): $ResourceLocation
public "getItemType"(): string
public "getData"(): $ResourceLocation
public "getSort"(): integer
public "getTooltip"(): string
public "getName"(): string
public "getType"(): string
get "display"(): $ResourceLocation
get "itemType"(): string
get "data"(): $ResourceLocation
get "sort"(): integer
get "tooltip"(): string
get "name"(): string
get "type"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunIndexPOJO$Type = ($GunIndexPOJO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunIndexPOJO_ = $GunIndexPOJO$Type;
}}
declare module "packages/com/tacz/guns/crafting/$GunSmithTableIngredient" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $GunSmithTableIngredient {

constructor(arg0: $Ingredient$Type, arg1: integer)

public "getIngredient"(): $Ingredient
public "getCount"(): integer
get "ingredient"(): $Ingredient
get "count"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableIngredient$Type = ($GunSmithTableIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableIngredient_ = $GunSmithTableIngredient$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$ObjectAnimationSoundChannel" {
import {$AnimationSoundChannelContent, $AnimationSoundChannelContent$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationSoundChannelContent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ObjectAnimationSoundChannel {
 "content": $AnimationSoundChannelContent

constructor(arg0: $AnimationSoundChannelContent$Type)
constructor()

public "getEndTimeS"(): double
public "playSound"(arg0: double, arg1: double, arg2: $Entity$Type, arg3: integer, arg4: float, arg5: float): void
get "endTimeS"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectAnimationSoundChannel$Type = ($ObjectAnimationSoundChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectAnimationSoundChannel_ = $ObjectAnimationSoundChannel$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$ShellEjection" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"

export class $ShellEjection {

constructor()

public "getInitialVelocity"(): $Vector3f
public "getRandomVelocity"(): $Vector3f
public "getAcceleration"(): $Vector3f
public "getAngularVelocity"(): $Vector3f
public "getLivingTime"(): float
get "initialVelocity"(): $Vector3f
get "randomVelocity"(): $Vector3f
get "acceleration"(): $Vector3f
get "angularVelocity"(): $Vector3f
get "livingTime"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShellEjection$Type = ($ShellEjection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShellEjection_ = $ShellEjection$Type;
}}
declare module "packages/com/tacz/guns/api/item/nbt/$BlockItemDataAccessor" {
import {$IBlock, $IBlock$Type} from "packages/com/tacz/guns/api/item/$IBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $BlockItemDataAccessor extends $IBlock {

 "getBlockId"(arg0: $ItemStack$Type): $ResourceLocation
 "setBlockId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
}

export namespace $BlockItemDataAccessor {
const BLOCK_ID: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemDataAccessor$Type = ($BlockItemDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemDataAccessor_ = $BlockItemDataAccessor$Type;
}}
declare module "packages/com/tacz/guns/api/$GunProperty" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export class $GunProperty<T> extends $Record {

constructor(name: string, type: $Class$Type<(T)>)

public "name"(): string
public "type"(): $Class<(T)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<T>(arg0: string, arg1: $TypeToken$Type<(T)>): $GunProperty<(T)>
public static "of"<T>(arg0: string, arg1: $Class$Type<(T)>): $GunProperty<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunProperty$Type<T> = ($GunProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunProperty_<T> = $GunProperty$Type<(T)>;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$EntityHurtByGunPreEventJS" {
import {$GunDamageSourcePart, $GunDamageSourcePart$Type} from "packages/com/tacz/guns/api/event/common/$GunDamageSourcePart"
import {$EntityHurtByGunEvent$Pre, $EntityHurtByGunEvent$Pre$Type} from "packages/com/tacz/guns/api/event/common/$EntityHurtByGunEvent$Pre"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$TimelessForgeEventWrappers$EntityHurtByGunPreWrapper, $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$EntityHurtByGunPreWrapper"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GunKubeJSEvents$EntityHurtByGunPreEventJS extends $GunKubeJSEvents$GunEventJS<($EntityHurtByGunEvent$Pre)> implements $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper {

constructor(arg0: $EntityHurtByGunEvent$Pre$Type)

public "getEventSubId"(): $ResourceLocation
public "setGunId"(arg0: $ResourceLocation$Type): void
public "setHeadshot"(arg0: boolean): void
public "setHeadshotMultiplier"(arg0: float): void
public "setHurtEntity"(arg0: $Entity$Type): void
public "setAttacker"(arg0: $LivingEntity$Type): void
public "setBaseAmount"(arg0: float): void
public "setDamageSource"(arg0: $GunDamageSourcePart$Type, arg1: $DamageSource$Type): void
public "getAttacker"(): $LivingEntity
public "getDamageSource"(arg0: $GunDamageSourcePart$Type): $DamageSource
public "getBullet"(): $Entity
public "getHurtEntity"(): $Entity
public "getBaseAmount"(): float
public "getHeadshotMultiplier"(): float
public "isHeadShot"(): boolean
public "getLogicalSide"(): $LogicalSide
public "getGunId"(): $ResourceLocation
get "eventSubId"(): $ResourceLocation
set "gunId"(value: $ResourceLocation$Type)
set "headshot"(value: boolean)
set "headshotMultiplier"(value: float)
set "hurtEntity"(value: $Entity$Type)
set "attacker"(value: $LivingEntity$Type)
set "baseAmount"(value: float)
get "attacker"(): $LivingEntity
get "bullet"(): $Entity
get "hurtEntity"(): $Entity
get "baseAmount"(): float
get "headshotMultiplier"(): float
get "headShot"(): boolean
get "logicalSide"(): $LogicalSide
get "gunId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$EntityHurtByGunPreEventJS$Type = ($GunKubeJSEvents$EntityHurtByGunPreEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$EntityHurtByGunPreEventJS_ = $GunKubeJSEvents$EntityHurtByGunPreEventJS$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$TextShow" {
import {$Align, $Align$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$Align"

export class $TextShow {

constructor()

public "getTextLight"(): integer
public "getAlign"(): $Align
public "getColorText"(): string
public "setColorInt"(arg0: integer): void
public "getTextKey"(): string
public "isShadow"(): boolean
public "getColorInt"(): integer
public "getScale"(): float
get "textLight"(): integer
get "align"(): $Align
get "colorText"(): string
set "colorInt"(value: integer)
get "textKey"(): string
get "shadow"(): boolean
get "colorInt"(): integer
get "scale"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextShow$Type = ($TextShow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextShow_ = $TextShow$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$Ignite" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Ignite {

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: boolean)

public "isIgniteEntity"(): boolean
public "isIgniteBlock"(): boolean
get "igniteEntity"(): boolean
get "igniteBlock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ignite$Type = ($Ignite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ignite_ = $Ignite$Type;
}}
declare module "packages/com/tacz/guns/block/$StatueBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $StatueBlock extends $BaseEntityBlock {
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "FACING": $DirectionProperty
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
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatueBlock$Type = ($StatueBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatueBlock_ = $StatueBlock$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$ExtraDamage$DistanceDamagePair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ExtraDamage$DistanceDamagePair {

constructor(arg0: float, arg1: float)

public "getDistance"(): float
public "getDamage"(): float
get "distance"(): float
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraDamage$DistanceDamagePair$Type = ($ExtraDamage$DistanceDamagePair);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraDamage$DistanceDamagePair_ = $ExtraDamage$DistanceDamagePair$Type;
}}
declare module "packages/com/tacz/guns/api/item/$IAmmo" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IAmmo {

 "isAmmoOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
}

export namespace $IAmmo {
function getIAmmoOrNull(arg0: $ItemStack$Type): $IAmmo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAmmo$Type = ($IAmmo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAmmo_ = $IAmmo$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunShootWrapper" {
import {$GunShootEvent, $GunShootEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunShootEvent"
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $TimelessForgeEventWrappers$GunShootWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($GunShootEvent)> {

 "getLogicalSide"(): $LogicalSide
 "getGunItemStack"(): $ItemStack
 "getShooter"(): $LivingEntity
 "getForgeEvent"(): $GunShootEvent

(): $LogicalSide
}

export namespace $TimelessForgeEventWrappers$GunShootWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$GunShootWrapper$Type = ($TimelessForgeEventWrappers$GunShootWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$GunShootWrapper_ = $TimelessForgeEventWrappers$GunShootWrapper$Type;
}}
declare module "packages/com/tacz/guns/api/client/event/$BeforeRenderHandEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"

export class $BeforeRenderHandEvent extends $Event implements $KubeJSGunEventPoster<($BeforeRenderHandEvent)> {

constructor()
constructor(arg0: $PoseStack$Type)

public "getPoseStack"(): $PoseStack
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $BeforeRenderHandEvent$Type): void
public "postClientEventToKubeJS"(arg0: $BeforeRenderHandEvent$Type): void
public "postServerEventToKubeJS"(arg0: $BeforeRenderHandEvent$Type): void
get "poseStack"(): $PoseStack
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeforeRenderHandEvent$Type = ($BeforeRenderHandEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeforeRenderHandEvent_ = $BeforeRenderHandEvent$Type;
}}
declare module "packages/com/tacz/guns/crafting/result/$GunSmithTableResult" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RawGunTableResult, $RawGunTableResult$Type} from "packages/com/tacz/guns/crafting/result/$RawGunTableResult"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GunSmithTableResult {
static readonly "GUN": string
static readonly "AMMO": string
static readonly "ATTACHMENT": string
static readonly "CUSTOM": string

constructor(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type)
constructor(arg0: $RawGunTableResult$Type, arg1: $ResourceLocation$Type)
constructor(arg0: $RawGunTableResult$Type)

public "getResult"(): $ItemStack
public "getGroup"(): $ResourceLocation
public "init"(): void
get "result"(): $ItemStack
get "group"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableResult$Type = ($GunSmithTableResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableResult_ = $GunSmithTableResult$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/model/$GeometryModelLegacy" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$BonesItem, $BonesItem$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BonesItem"

export class $GeometryModelLegacy {

constructor()

public "deco"(): $GeometryModelLegacy
public "getBones"(): $List<($BonesItem)>
public "getTextureWidth"(): integer
public "getTextureHeight"(): integer
public "getVisibleBoundsOffset"(): $List<(float)>
public "getVisibleBoundsWidth"(): float
public "getVisibleBoundsHeight"(): float
get "bones"(): $List<($BonesItem)>
get "textureWidth"(): integer
get "textureHeight"(): integer
get "visibleBoundsOffset"(): $List<(float)>
get "visibleBoundsWidth"(): float
get "visibleBoundsHeight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeometryModelLegacy$Type = ($GeometryModelLegacy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeometryModelLegacy_ = $GeometryModelLegacy$Type;
}}
declare module "packages/com/tacz/guns/api/client/event/$RenderLevelBobEvent$BobView" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$RenderLevelBobEvent, $RenderLevelBobEvent$Type} from "packages/com/tacz/guns/api/client/event/$RenderLevelBobEvent"

export class $RenderLevelBobEvent$BobView extends $RenderLevelBobEvent {

constructor()

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLevelBobEvent$BobView$Type = ($RenderLevelBobEvent$BobView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderLevelBobEvent$BobView_ = $RenderLevelBobEvent$BobView$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$AnimationSoundChannelContent" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AnimationSoundChannelContent {
 "keyframeTimeS": (double)[]
 "keyframeSoundName": ($ResourceLocation)[]

constructor()
constructor(arg0: $AnimationSoundChannelContent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationSoundChannelContent$Type = ($AnimationSoundChannelContent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationSoundChannelContent_ = $AnimationSoundChannelContent$Type;
}}
declare module "packages/com/tacz/guns/api/client/event/$RenderItemInHandBobEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"

export class $RenderItemInHandBobEvent extends $Event implements $KubeJSGunEventPoster<($RenderItemInHandBobEvent)> {

constructor()

public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $RenderItemInHandBobEvent$Type): void
public "postClientEventToKubeJS"(arg0: $RenderItemInHandBobEvent$Type): void
public "postServerEventToKubeJS"(arg0: $RenderItemInHandBobEvent$Type): void
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderItemInHandBobEvent$Type = ($RenderItemInHandBobEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderItemInHandBobEvent_ = $RenderItemInHandBobEvent$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$AmmoHitBlockEventJS" {
import {$EntityKineticBullet, $EntityKineticBullet$Type} from "packages/com/tacz/guns/entity/$EntityKineticBullet"
import {$TimelessForgeEventWrappers$AmmoHitBlockWrapper, $TimelessForgeEventWrappers$AmmoHitBlockWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$AmmoHitBlockWrapper"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AmmoHitBlockEvent, $AmmoHitBlockEvent$Type} from "packages/com/tacz/guns/api/event/server/$AmmoHitBlockEvent"

export class $GunKubeJSEvents$AmmoHitBlockEventJS extends $GunKubeJSEvents$GunEventJS<($AmmoHitBlockEvent)> implements $TimelessForgeEventWrappers$AmmoHitBlockWrapper {

constructor(arg0: $AmmoHitBlockEvent$Type)

public "getEventSubId"(): $ResourceLocation
public "getHitResult"(): $BlockHitResult
public "getAmmo"(): $EntityKineticBullet
public "getLevel"(): $Level
public "getState"(): $BlockState
get "eventSubId"(): $ResourceLocation
get "hitResult"(): $BlockHitResult
get "ammo"(): $EntityKineticBullet
get "level"(): $Level
get "state"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$AmmoHitBlockEventJS$Type = ($GunKubeJSEvents$AmmoHitBlockEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$AmmoHitBlockEventJS_ = $GunKubeJSEvents$AmmoHitBlockEventJS$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$ExtraDamage" {
import {$LinkedList, $LinkedList$Type} from "packages/java/util/$LinkedList"
import {$ExtraDamage$DistanceDamagePair, $ExtraDamage$DistanceDamagePair$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$ExtraDamage$DistanceDamagePair"

export class $ExtraDamage {

constructor()

public "getArmorIgnore"(): float
public "getDamageAdjust"(): $LinkedList<($ExtraDamage$DistanceDamagePair)>
public "getHeadShotMultiplier"(): float
get "armorIgnore"(): float
get "damageAdjust"(): $LinkedList<($ExtraDamage$DistanceDamagePair)>
get "headShotMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraDamage$Type = ($ExtraDamage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraDamage_ = $ExtraDamage$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$AnimationPlan" {
import {$ObjectAnimation$PlayType, $ObjectAnimation$PlayType$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimation$PlayType"

export class $AnimationPlan {
 "animationName": string
 "playType": $ObjectAnimation$PlayType
 "transitionTimeS": float

constructor(arg0: string, arg1: $ObjectAnimation$PlayType$Type, arg2: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPlan$Type = ($AnimationPlan);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPlan_ = $AnimationPlan$Type;
}}
declare module "packages/com/tacz/guns/api/client/event/$RenderItemInHandBobEvent$BobHurt" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$RenderItemInHandBobEvent, $RenderItemInHandBobEvent$Type} from "packages/com/tacz/guns/api/client/event/$RenderItemInHandBobEvent"

export class $RenderItemInHandBobEvent$BobHurt extends $RenderItemInHandBobEvent {

constructor()

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderItemInHandBobEvent$BobHurt$Type = ($RenderItemInHandBobEvent$BobHurt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderItemInHandBobEvent$BobHurt_ = $RenderItemInHandBobEvent$BobHurt$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$ChargeType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChargeType extends $Enum<($ChargeType)> {
static readonly "AUTO": $ChargeType
static readonly "HOLD": $ChargeType
static readonly "DELAY": $ChargeType


public static "values"(): ($ChargeType)[]
public static "valueOf"(arg0: string): $ChargeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeType$Type = (("auto") | ("delay") | ("hold")) | ($ChargeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeType_ = $ChargeType$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/model/$CubesItem" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$FaceUVsItem, $FaceUVsItem$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$FaceUVsItem"

export class $CubesItem {

constructor()

public "isMirror"(): boolean
public "getUv"(): $List<(float)>
public "getFaceUv"(): $FaceUVsItem
public "getInflate"(): float
public "setMirror"(arg0: boolean): void
public "isHasMirror"(): boolean
public "getPivot"(): $List<(float)>
public "getOrigin"(): $List<(float)>
public "getRotation"(): $List<(float)>
public "getSize"(): $List<(float)>
get "mirror"(): boolean
get "uv"(): $List<(float)>
get "faceUv"(): $FaceUVsItem
get "inflate"(): float
set "mirror"(value: boolean)
get "hasMirror"(): boolean
get "pivot"(): $List<(float)>
get "origin"(): $List<(float)>
get "rotation"(): $List<(float)>
get "size"(): $List<(float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubesItem$Type = ($CubesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CubesItem_ = $CubesItem$Type;
}}
declare module "packages/com/tacz/guns/api/modifier/$JsonProperty" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"

export class $JsonProperty<T> {

constructor(arg0: T)

public "initComponents"(): void
public "getComponents"(): $List<($Component)>
public "getValue"(): T
public "setValue"(arg0: T): void
get "components"(): $List<($Component)>
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonProperty$Type<T> = ($JsonProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonProperty_<T> = $JsonProperty$Type<(T)>;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$SwapItemWithOffHandEventJS" {
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$SwapItemWithOffHand, $SwapItemWithOffHand$Type} from "packages/com/tacz/guns/api/client/event/$SwapItemWithOffHand"

export class $GunKubeJSEvents$SwapItemWithOffHandEventJS extends $GunKubeJSEvents$GunEventJS<($SwapItemWithOffHand)> {

constructor(arg0: $SwapItemWithOffHand$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$SwapItemWithOffHandEventJS$Type = ($GunKubeJSEvents$SwapItemWithOffHandEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$SwapItemWithOffHandEventJS_ = $GunKubeJSEvents$SwapItemWithOffHandEventJS$Type;
}}
declare module "packages/com/tacz/guns/block/$GunSmithTableBlockA" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$AbstractGunSmithTableBlock, $AbstractGunSmithTableBlock$Type} from "packages/com/tacz/guns/block/$AbstractGunSmithTableBlock"

export class $GunSmithTableBlockA extends $AbstractGunSmithTableBlock {
static readonly "FACING": $DirectionProperty
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

public "getRootPos"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isRoot"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableBlockA$Type = ($GunSmithTableBlockA);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableBlockA_ = $GunSmithTableBlockA$Type;
}}
declare module "packages/com/tacz/guns/block/$GunSmithTableBlockB" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AbstractGunSmithTableBlock, $AbstractGunSmithTableBlock$Type} from "packages/com/tacz/guns/block/$AbstractGunSmithTableBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BedPart, $BedPart$Type} from "packages/net/minecraft/world/level/block/state/properties/$BedPart"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $GunSmithTableBlockB extends $AbstractGunSmithTableBlock {
static readonly "PART": $EnumProperty<($BedPart)>
static readonly "FACING": $DirectionProperty
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

public "getRootPos"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
public "parseRotation"(arg0: $Direction$Type): float
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isRoot"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableBlockB$Type = ($GunSmithTableBlockB);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableBlockB_ = $GunSmithTableBlockB$Type;
}}
declare module "packages/com/tacz/guns/block/$GunSmithTableBlockC" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AbstractGunSmithTableBlock, $AbstractGunSmithTableBlock$Type} from "packages/com/tacz/guns/block/$AbstractGunSmithTableBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $GunSmithTableBlockC extends $AbstractGunSmithTableBlock {
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "FACING": $DirectionProperty
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

public "getRootPos"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isRoot"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableBlockC$Type = ($GunSmithTableBlockC);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableBlockC_ = $GunSmithTableBlockC$Type;
}}
declare module "packages/com/tacz/guns/item/$ModernKineticGunItem$DefaultPropertyModification" {
import {$CommonGunIndex, $CommonGunIndex$Type} from "packages/com/tacz/guns/resource/index/$CommonGunIndex"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModernKineticGunItem, $ModernKineticGunItem$Type} from "packages/com/tacz/guns/item/$ModernKineticGunItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ModernKineticGunItem$DefaultPropertyModification {
static readonly "SLUGS": $ResourceLocation

constructor(arg0: $ModernKineticGunItem$Type)

public "modify"<T>(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $CommonGunIndex$Type, arg3: string, arg4: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModernKineticGunItem$DefaultPropertyModification$Type = ($ModernKineticGunItem$DefaultPropertyModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModernKineticGunItem$DefaultPropertyModification_ = $ModernKineticGunItem$DefaultPropertyModification$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunFireSelectWrapper" {
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$GunFireSelectEvent, $GunFireSelectEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunFireSelectEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $TimelessForgeEventWrappers$GunFireSelectWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($GunFireSelectEvent)> {

 "getLogicalSide"(): $LogicalSide
 "getGunItemStack"(): $ItemStack
 "getShooter"(): $LivingEntity
 "getForgeEvent"(): $GunFireSelectEvent

(): $LogicalSide
}

export namespace $TimelessForgeEventWrappers$GunFireSelectWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$GunFireSelectWrapper$Type = ($TimelessForgeEventWrappers$GunFireSelectWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$GunFireSelectWrapper_ = $TimelessForgeEventWrappers$GunFireSelectWrapper$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/statemachine/$AnimationStateMachine" {
import {$AnimationStateContext, $AnimationStateContext$Type} from "packages/com/tacz/guns/api/client/animation/statemachine/$AnimationStateContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AnimationController, $AnimationController$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationController"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $AnimationStateMachine<T extends $AnimationStateContext> {

constructor(arg0: $AnimationController$Type)

public "visualUpdate"(): void
public "setExitingTime"(arg0: long): void
public "getExitingTime"(): long
public "getAnimationController"(): $AnimationController
public "processContextIfExist"(arg0: $Consumer$Type<(T)>): void
public "setStatesSupplier"(arg0: $Supplier$Type<($Iterable$Type<(any)>)>): void
public "isInitialized"(): boolean
public "setContext"(arg0: T): void
public "exit"(): void
public "update"(): void
public "trigger"(arg0: string): void
public "initialize"(): void
public "getContext"(): T
set "exitingTime"(value: long)
get "exitingTime"(): long
get "animationController"(): $AnimationController
set "statesSupplier"(value: $Supplier$Type<($Iterable$Type<(any)>)>)
get "initialized"(): boolean
set "context"(value: T)
get "context"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationStateMachine$Type<T> = ($AnimationStateMachine<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationStateMachine_<T> = $AnimationStateMachine$Type<(T)>;
}}
declare module "packages/com/tacz/guns/api/util/$LuaNbtAccessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $LuaNbtAccessor extends $Record {

constructor(nbt: $CompoundTag$Type)

public "newCompoundTag"(): $LuaNbtAccessor
public "putCompound"(arg0: string, arg1: $LuaNbtAccessor$Type): void
public "getCompound"(arg0: string): $LuaNbtAccessor
public "getString"(arg0: string): string
public "putString"(arg0: string, arg1: string): void
public "nbt"(): $CompoundTag
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getBoolean"(arg0: $CompoundTag$Type, arg1: string): boolean
public "putBoolean"(arg0: string, arg1: boolean): void
public "getInt"(arg0: string): integer
public "putInt"(arg0: string, arg1: integer): void
public "getLong"(arg0: string): long
public "putLong"(arg0: string, arg1: long): void
public "getFloat"(arg0: string): float
public "putFloat"(arg0: string, arg1: float): void
public "getDouble"(arg0: string): double
public "putDouble"(arg0: string, arg1: double): void
public "contains"(arg0: string, arg1: integer): boolean
public "contains"(arg0: string): boolean
public static "from"(arg0: $CompoundTag$Type): $LuaNbtAccessor
public static "from"(arg0: $ItemStack$Type): $LuaNbtAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaNbtAccessor$Type = ($LuaNbtAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaNbtAccessor_ = $LuaNbtAccessor$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/$AmmoIndexPOJO" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AmmoIndexPOJO {

constructor()

public "getDisplay"(): $ResourceLocation
public "getSort"(): integer
public "getStackSize"(): integer
public "getTooltip"(): string
public "getName"(): string
get "display"(): $ResourceLocation
get "sort"(): integer
get "stackSize"(): integer
get "tooltip"(): string
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoIndexPOJO$Type = ($AmmoIndexPOJO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoIndexPOJO_ = $AmmoIndexPOJO$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/attachment/$EffectData" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EffectData {

constructor()

public "getEffectId"(): $ResourceLocation
public "getAmplifier"(): integer
public "isHideParticles"(): boolean
public "getTime"(): integer
get "effectId"(): $ResourceLocation
get "amplifier"(): integer
get "hideParticles"(): boolean
get "time"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectData$Type = ($EffectData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectData_ = $EffectData$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunFireSelectEventJS" {
import {$GunFireSelectEvent, $GunFireSelectEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunFireSelectEvent"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TimelessForgeEventWrappers$GunFireSelectWrapper, $TimelessForgeEventWrappers$GunFireSelectWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunFireSelectWrapper"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $GunKubeJSEvents$GunFireSelectEventJS extends $GunKubeJSEvents$GunEventJS<($GunFireSelectEvent)> implements $TimelessForgeEventWrappers$GunFireSelectWrapper {

constructor(arg0: $GunFireSelectEvent$Type)

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getShooter"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "shooter"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$GunFireSelectEventJS$Type = ($GunKubeJSEvents$GunFireSelectEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$GunFireSelectEventJS_ = $GunKubeJSEvents$GunFireSelectEventJS$Type;
}}
declare module "packages/com/tacz/guns/api/item/nbt/$AmmoItemDataAccessor" {
import {$IAmmo, $IAmmo$Type} from "packages/com/tacz/guns/api/item/$IAmmo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $AmmoItemDataAccessor extends $IAmmo {

 "isAmmoOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
}

export namespace $AmmoItemDataAccessor {
const AMMO_ID_TAG: string
function getIAmmoOrNull(arg0: $ItemStack$Type): $IAmmo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoItemDataAccessor$Type = ($AmmoItemDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoItemDataAccessor_ = $AmmoItemDataAccessor$Type;
}}
declare module "packages/com/tacz/guns/api/item/$IAttachment" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IAttachment {

 "hasCustomLaserColor"(arg0: $ItemStack$Type): boolean
 "getLaserColor"(arg0: $ItemStack$Type): integer
 "setLaserColor"(arg0: $ItemStack$Type, arg1: integer): void
 "setAttachmentId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
/**
 * 
 * @deprecated
 */
 "getSkinId"(arg0: $ItemStack$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "setSkinId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getZoomNumber"(arg0: $ItemStack$Type): integer
 "setZoomNumber"(arg0: $ItemStack$Type, arg1: integer): void
 "getAttachmentId"(arg0: $ItemStack$Type): $ResourceLocation
 "getType"(arg0: $ItemStack$Type): $AttachmentType
}

export namespace $IAttachment {
function getIAttachmentOrNull(arg0: $ItemStack$Type): $IAttachment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachment$Type = ($IAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttachment_ = $IAttachment$Type;
}}
declare module "packages/com/tacz/guns/api/item/$IAnimationItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IAnimationItem {

 "isSame"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean

(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}

export namespace $IAnimationItem {
function matchesIgnoreCount(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnimationItem$Type = ($IAnimationItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAnimationItem_ = $IAnimationItem$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$GunFireModeAdjustData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GunFireModeAdjustData {

constructor()

public "getRoundsPerMinute"(): integer
public "getKnockback"(): float
public "getArmorIgnore"(): float
public "getHeadShotMultiplier"(): float
public "getAimInaccuracy"(): float
public "getOtherInaccuracy"(): float
public "getSpeed"(): float
public "getDamageAmount"(): float
get "roundsPerMinute"(): integer
get "knockback"(): float
get "armorIgnore"(): float
get "headShotMultiplier"(): float
get "aimInaccuracy"(): float
get "otherInaccuracy"(): float
get "speed"(): float
get "damageAmount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunFireModeAdjustData$Type = ($GunFireModeAdjustData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunFireModeAdjustData_ = $GunFireModeAdjustData$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$GunRecoil" {
import {$GunRecoilKeyFrame, $GunRecoilKeyFrame$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunRecoilKeyFrame"
import {$PolynomialSplineFunction, $PolynomialSplineFunction$Type} from "packages/org/apache/commons/math3/analysis/polynomials/$PolynomialSplineFunction"

export class $GunRecoil {

constructor()

public "genPitchSplineFunction"(arg0: float): $PolynomialSplineFunction
public "genYawSplineFunction"(arg0: float): $PolynomialSplineFunction
public "getYaw"(): ($GunRecoilKeyFrame)[]
public "getPitch"(): ($GunRecoilKeyFrame)[]
public "setYaw"(arg0: ($GunRecoilKeyFrame$Type)[]): void
public "setPitch"(arg0: ($GunRecoilKeyFrame$Type)[]): void
get "yaw"(): ($GunRecoilKeyFrame)[]
get "pitch"(): ($GunRecoilKeyFrame)[]
set "yaw"(value: ($GunRecoilKeyFrame$Type)[])
set "pitch"(value: ($GunRecoilKeyFrame$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunRecoil$Type = ($GunRecoil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunRecoil_ = $GunRecoil$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$BulletData" {
import {$Ignite, $Ignite$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$Ignite"
import {$ExtraDamage, $ExtraDamage$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$ExtraDamage"
import {$ExplosionData, $ExplosionData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$ExplosionData"

export class $BulletData {

constructor()

public "getKnockback"(): float
public "getExtraDamage"(): $ExtraDamage
public "getExplosionData"(): $ExplosionData
public "getIgnite"(): $Ignite
public "getPierce"(): integer
public "getLifeSecond"(): float
public "getIgniteEntityTime"(): integer
public "getSpeed"(): float
public "getDamageAmount"(): float
public "getGravity"(): float
public "hasTracerAmmo"(): boolean
public "getTracerCountInterval"(): integer
public "getFriction"(): float
public "getBulletAmount"(): integer
get "knockback"(): float
get "extraDamage"(): $ExtraDamage
get "explosionData"(): $ExplosionData
get "ignite"(): $Ignite
get "pierce"(): integer
get "lifeSecond"(): float
get "igniteEntityTime"(): integer
get "speed"(): float
get "damageAmount"(): float
get "gravity"(): float
get "tracerCountInterval"(): integer
get "friction"(): float
get "bulletAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletData$Type = ($BulletData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulletData_ = $BulletData$Type;
}}
declare module "packages/com/tacz/guns/api/item/nbt/$AttachmentItemDataAccessor" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IAttachment, $IAttachment$Type} from "packages/com/tacz/guns/api/item/$IAttachment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $AttachmentItemDataAccessor extends $IAttachment {

 "hasCustomLaserColor"(arg0: $ItemStack$Type): boolean
 "getLaserColor"(arg0: $ItemStack$Type): integer
 "setLaserColor"(arg0: $ItemStack$Type, arg1: integer): void
 "setAttachmentId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getSkinId"(arg0: $ItemStack$Type): $ResourceLocation
 "setSkinId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getZoomNumber"(arg0: $ItemStack$Type): integer
 "setZoomNumber"(arg0: $ItemStack$Type, arg1: integer): void
 "getAttachmentId"(arg0: $ItemStack$Type): $ResourceLocation
 "getType"(arg0: $ItemStack$Type): $AttachmentType

(arg0: $ItemStack$Type): boolean
}

export namespace $AttachmentItemDataAccessor {
const ATTACHMENT_ID_TAG: string
const SKIN_ID_TAG: string
const ZOOM_NUMBER_TAG: string
const LASER_COLOR_TAG: string
function isAttachmentLike(arg0: $CompoundTag$Type): boolean
function setZoomNumberToTag(arg0: $CompoundTag$Type, arg1: integer): void
function getAttachmentIdFromTag(arg0: $CompoundTag$Type): $ResourceLocation
function getZoomNumberFromTag(arg0: $CompoundTag$Type): integer
function getIAttachmentOrNull(arg0: $ItemStack$Type): $IAttachment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentItemDataAccessor$Type = ($AttachmentItemDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentItemDataAccessor_ = $AttachmentItemDataAccessor$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/model/$GeometryModelNew" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Description, $Description$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$Description"
import {$BonesItem, $BonesItem$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BonesItem"

export class $GeometryModelNew {

constructor()

public "deco"(): $GeometryModelNew
public "getBones"(): $List<($BonesItem)>
public "getDescription"(): $Description
get "bones"(): $List<($BonesItem)>
get "description"(): $Description
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeometryModelNew$Type = ($GeometryModelNew);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeometryModelNew_ = $GeometryModelNew$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$Bolt" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Bolt extends $Enum<($Bolt)> {
static readonly "OPEN_BOLT": $Bolt
static readonly "CLOSED_BOLT": $Bolt
static readonly "MANUAL_ACTION": $Bolt


public static "values"(): ($Bolt)[]
public static "valueOf"(arg0: string): $Bolt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bolt$Type = (("manual_action") | ("open_bolt") | ("closed_bolt")) | ($Bolt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bolt_ = $Bolt$Type;
}}
declare module "packages/com/tacz/guns/client/gameplay/$LocalPlayerDataHolder" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IGunOperator, $IGunOperator$Type} from "packages/com/tacz/guns/api/entity/$IGunOperator"
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/java/util/concurrent/$ScheduledFuture"
import {$ScheduledExecutorService, $ScheduledExecutorService$Type} from "packages/java/util/concurrent/$ScheduledExecutorService"

export class $LocalPlayerDataHolder {
static readonly "SCHEDULED_EXECUTOR_SERVICE": $ScheduledExecutorService
 "clientBaseTimestamp": long
static "oldAimingProgress": float
static "clientClickButtonTimestamp": long
 "clientShootTimestamp": long
 "clientLastShootTimestamp": long
 "isShootRecorded": boolean
 "chargeProgress": float
 "isCharging": boolean
 "clientStateLock": boolean
 "isBolting": boolean
 "clientAimingProgress": float
 "clientAimingTimestamp": long
 "clientIsAiming": boolean
 "clientDrawTimestamp": long
 "drawFuture": $ScheduledFuture<(any)>
 "lockedCondition": $Predicate<($IGunOperator)>
 "lockTimestamp": long

constructor(arg0: $LocalPlayer$Type)

public "lockState"(arg0: $Predicate$Type<($IGunOperator$Type)>): void
public "tickStateLock"(): void
public "reset"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerDataHolder$Type = ($LocalPlayerDataHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalPlayerDataHolder_ = $LocalPlayerDataHolder$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$AnimationListener" {
import {$ObjectAnimationChannel$ChannelType, $ObjectAnimationChannel$ChannelType$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimationChannel$ChannelType"

export interface $AnimationListener {

 "initialValue"(): (float)[]
 "update"(arg0: (float)[], arg1: boolean): void
 "getType"(): $ObjectAnimationChannel$ChannelType
}

export namespace $AnimationListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationListener$Type = ($AnimationListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationListener_ = $AnimationListener$Type;
}}
declare module "packages/com/tacz/guns/api/item/attachment/$AttachmentType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AttachmentType extends $Enum<($AttachmentType)> {
static readonly "SCOPE": $AttachmentType
static readonly "MUZZLE": $AttachmentType
static readonly "STOCK": $AttachmentType
static readonly "GRIP": $AttachmentType
static readonly "LASER": $AttachmentType
static readonly "EXTENDED_MAG": $AttachmentType
static readonly "NONE": $AttachmentType


public static "values"(): ($AttachmentType)[]
public static "valueOf"(arg0: string): $AttachmentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$Type = (("grip") | ("laser") | ("extended_mag") | ("scope") | ("muzzle") | ("none") | ("stock")) | ($AttachmentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentType_ = $AttachmentType$Type;
}}
declare module "packages/com/tacz/guns/api/modifier/$ParameterizedCachePair" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Pair, $Pair$Type} from "packages/it/unimi/dsi/fastutil/$Pair"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParameterizedCache, $ParameterizedCache$Type} from "packages/com/tacz/guns/api/modifier/$ParameterizedCache"
import {$Modifier, $Modifier$Type} from "packages/com/tacz/guns/resource/pojo/data/attachment/$Modifier"

export class $ParameterizedCachePair<L, R> implements $Pair<($ParameterizedCache<(L)>), ($ParameterizedCache<(R)>)> {


public static "of"<L, R>(arg0: $List$Type<($Modifier$Type)>, arg1: $List$Type<($Modifier$Type)>, arg2: L, arg3: R): $ParameterizedCachePair<(L), (R)>
public static "of"<L, R>(arg0: L, arg1: R): $ParameterizedCachePair<(L), (R)>
public "left"(arg0: $ParameterizedCache$Type<(L)>): $Pair<($ParameterizedCache<(L)>), ($ParameterizedCache<(R)>)>
public "right"(arg0: $ParameterizedCache$Type<(R)>): $Pair<($ParameterizedCache<(L)>), ($ParameterizedCache<(R)>)>
public static "lexComparator"<L, R>(): $Comparator<($Pair<($ParameterizedCache<(L)>), ($ParameterizedCache<(R)>)>)>
public "value"(): $ParameterizedCache<(R)>
public "value"(arg0: $ParameterizedCache$Type<(R)>): $Pair<($ParameterizedCache<(L)>), ($ParameterizedCache<(R)>)>
public "first"(): $ParameterizedCache<(L)>
public "first"(arg0: $ParameterizedCache$Type<(L)>): $Pair<($ParameterizedCache<(L)>), ($ParameterizedCache<(R)>)>
public "second"(): $ParameterizedCache<(R)>
public "second"(arg0: $ParameterizedCache$Type<(R)>): $Pair<($ParameterizedCache<(L)>), ($ParameterizedCache<(R)>)>
public "key"(arg0: $ParameterizedCache$Type<(L)>): $Pair<($ParameterizedCache<(L)>), ($ParameterizedCache<(R)>)>
public "key"(): $ParameterizedCache<(L)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParameterizedCachePair$Type<L, R> = ($ParameterizedCachePair<(L), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParameterizedCachePair_<L, R> = $ParameterizedCachePair$Type<(L), (R)>;
}}
declare module "packages/com/tacz/guns/item/$TargetMinecartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TargetMinecartItem extends $Item {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetMinecartItem$Type = ($TargetMinecartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetMinecartItem_ = $TargetMinecartItem$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$GunReloadEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $GunReloadEvent extends $Event implements $KubeJSGunEventPoster<($GunReloadEvent)> {

constructor(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LogicalSide$Type)
constructor()

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getEntity"(): $LivingEntity
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $GunReloadEvent$Type): void
public "postClientEventToKubeJS"(arg0: $GunReloadEvent$Type): void
public "postServerEventToKubeJS"(arg0: $GunReloadEvent$Type): void
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "entity"(): $LivingEntity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunReloadEvent$Type = ($GunReloadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunReloadEvent_ = $GunReloadEvent$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/recipe/$TimelessRecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$GunSmithTableResultInfo$OutputGroupName, $GunSmithTableResultInfo$OutputGroupName$Type} from "packages/com/tacz/guns/compat/kubejs/util/$GunSmithTableResultInfo$OutputGroupName"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$GunSmithTableResultInfo, $GunSmithTableResultInfo$Type} from "packages/com/tacz/guns/compat/kubejs/util/$GunSmithTableResultInfo"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export class $TimelessRecipeJS extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "setResultInfo"(arg0: $GunSmithTableResultInfo$Type): void
public "outputGroup"(arg0: $GunSmithTableResultInfo$OutputGroupName$Type): $TimelessRecipeJS
public "getResultInfo"(): $GunSmithTableResultInfo
public "outputGroupName"(arg0: string): $TimelessRecipeJS
public "readInputItem"(arg0: any): $InputItem
public "writeInputItem"(arg0: $InputItem$Type): $JsonElement
/**
 * 
 * @deprecated
 */
public "readOutputItem"(arg0: any): $OutputItem
/**
 * 
 * @deprecated
 */
public "writeOutputItem"(arg0: $OutputItem$Type): $JsonElement
set "resultInfo"(value: $GunSmithTableResultInfo$Type)
get "resultInfo"(): $GunSmithTableResultInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessRecipeJS$Type = ($TimelessRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessRecipeJS_ = $TimelessRecipeJS$Type;
}}
declare module "packages/com/tacz/guns/resource/index/$CommonAttachmentIndex" {
import {$AttachmentIndexPOJO, $AttachmentIndexPOJO$Type} from "packages/com/tacz/guns/resource/pojo/$AttachmentIndexPOJO"
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$AttachmentData, $AttachmentData$Type} from "packages/com/tacz/guns/resource/pojo/data/attachment/$AttachmentData"

export class $CommonAttachmentIndex {


public "getPojo"(): $AttachmentIndexPOJO
public "getData"(): $AttachmentData
public "getSort"(): integer
public static "getInstance"(arg0: $AttachmentIndexPOJO$Type): $CommonAttachmentIndex
public "getType"(): $AttachmentType
get "pojo"(): $AttachmentIndexPOJO
get "data"(): $AttachmentData
get "sort"(): integer
get "type"(): $AttachmentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonAttachmentIndex$Type = ($CommonAttachmentIndex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonAttachmentIndex_ = $CommonAttachmentIndex$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$EntityKillByGunEvent" {
import {$GunDamageSourcePart, $GunDamageSourcePart$Type} from "packages/com/tacz/guns/api/event/common/$GunDamageSourcePart"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityKillByGunEvent extends $Event implements $KubeJSGunEventPoster<($EntityKillByGunEvent)> {

constructor(arg0: $Entity$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: float, arg6: $Pair$Type<($DamageSource$Type), ($DamageSource$Type)>, arg7: boolean, arg8: float, arg9: $LogicalSide$Type)
constructor()

public "getBaseDamage"(): float
public "getAttacker"(): $LivingEntity
public "getGunDisplayId"(): $ResourceLocation
public "getDamageSource"(arg0: $GunDamageSourcePart$Type): $DamageSource
public "getBullet"(): $Entity
public "getHeadshotMultiplier"(): float
public "isHeadShot"(): boolean
public "getLogicalSide"(): $LogicalSide
public "getKilledEntity"(): $LivingEntity
public "getGunId"(): $ResourceLocation
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $EntityKillByGunEvent$Type): void
public "postClientEventToKubeJS"(arg0: $EntityKillByGunEvent$Type): void
public "postServerEventToKubeJS"(arg0: $EntityKillByGunEvent$Type): void
get "baseDamage"(): float
get "attacker"(): $LivingEntity
get "gunDisplayId"(): $ResourceLocation
get "bullet"(): $Entity
get "headshotMultiplier"(): float
get "headShot"(): boolean
get "logicalSide"(): $LogicalSide
get "killedEntity"(): $LivingEntity
get "gunId"(): $ResourceLocation
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityKillByGunEvent$Type = ($EntityKillByGunEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityKillByGunEvent_ = $EntityKillByGunEvent$Type;
}}
declare module "packages/com/tacz/guns/api/item/$IGun" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GunProperty, $GunProperty$Type} from "packages/com/tacz/guns/api/$GunProperty"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ShooterDataHolder, $ShooterDataHolder$Type} from "packages/com/tacz/guns/entity/shooter/$ShooterDataHolder"

export interface $IGun {

 "getCurrentAmmoCount"(arg0: $ItemStack$Type): integer
 "useInventoryAmmo"(arg0: $ItemStack$Type): boolean
 "useDummyAmmo"(arg0: $ItemStack$Type): boolean
 "getDummyAmmoAmount"(arg0: $ItemStack$Type): integer
 "dropAllAmmo"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "addDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "allowAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "allowAttachmentType"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): boolean
 "hasInventoryAmmo"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "getRPM"(arg0: $ItemStack$Type): integer
 "isCanCrawl"(arg0: $ItemStack$Type): boolean
 "getGunDisplayId"(arg0: $ItemStack$Type): $ResourceLocation
 "getFireMode"(arg0: $ItemStack$Type): $FireMode
 "hasHeatData"(arg0: $ItemStack$Type): boolean
 "lerpRPM"(arg0: $ItemStack$Type): float
 "setFireMode"(arg0: $ItemStack$Type, arg1: $FireMode$Type): void
 "setCurrentAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
 "getAimingZoom"(arg0: $ItemStack$Type): float
 "setDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "hasMaxDummyAmmo"(arg0: $ItemStack$Type): boolean
 "getMaxDummyAmmoAmount"(arg0: $ItemStack$Type): integer
 "setMaxDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "hasAttachmentLock"(arg0: $ItemStack$Type): boolean
 "setAttachmentLock"(arg0: $ItemStack$Type, arg1: boolean): void
 "setGunId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "setGunDisplayId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getExpToNextLevel"(arg0: $ItemStack$Type): integer
 "getExpCurrentLevel"(arg0: $ItemStack$Type): integer
 "reduceCurrentAmmoCount"(arg0: $ItemStack$Type): void
 "modifyProperty"<T>(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: string, arg4: string, arg5: $Class$Type<(T)>, arg6: T): T
 "modifyProperty"<T>(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: string, arg4: $Class$Type<(T)>, arg5: T): T
 "modifyProperty"<T>(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $GunProperty$Type<(any)>, arg4: $Class$Type<(T)>, arg5: T): T
 "getBuiltinAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
 "installAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
 "unloadAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): void
 "hasBulletInBarrel"(arg0: $ItemStack$Type): boolean
 "setBulletInBarrel"(arg0: $ItemStack$Type, arg1: boolean): void
 "hasCustomLaserColor"(arg0: $ItemStack$Type): boolean
 "getLaserColor"(arg0: $ItemStack$Type): integer
 "setLaserColor"(arg0: $ItemStack$Type, arg1: integer): void
 "isOverheatLocked"(arg0: $ItemStack$Type): boolean
 "setOverheatLocked"(arg0: $ItemStack$Type, arg1: boolean): void
 "setHeatAmount"(arg0: $ItemStack$Type, arg1: float): void
 "lerpInaccuracy"(arg0: $ItemStack$Type): float
 "getHeatAmount"(arg0: $ItemStack$Type): float
 "getExp"(arg0: $ItemStack$Type): integer
 "getExp"(arg0: integer): integer
 "getAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
 "getGunId"(arg0: $ItemStack$Type): $ResourceLocation
 "getLevel"(arg0: $ItemStack$Type): integer
 "getLevel"(arg0: integer): integer
 "getMaxLevel"(): integer
 "getAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
 "getBuiltInAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
 "getAttachmentTag"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $CompoundTag
}

export namespace $IGun {
function mainhandHoldGun(arg0: $LivingEntity$Type): boolean
function mainHandHoldGun(arg0: $LivingEntity$Type): boolean
function getMainhandFireMode(arg0: $LivingEntity$Type): $FireMode
function getMainHandFireMode(arg0: $LivingEntity$Type): $FireMode
function getIGunOrNull(arg0: $ItemStack$Type): $IGun
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGun$Type = ($IGun);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGun_ = $IGun$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/model/$FaceUVsItem" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FaceItem, $FaceItem$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$FaceItem"

export class $FaceUVsItem {

constructor()

public "getFace"(arg0: $Direction$Type): $FaceItem
public static "singleSouthFace"(): $FaceUVsItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceUVsItem$Type = ($FaceUVsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceUVsItem_ = $FaceUVsItem$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$AttachmentPropertyEventJS" {
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AttachmentCacheProperty, $AttachmentCacheProperty$Type} from "packages/com/tacz/guns/resource/modifier/$AttachmentCacheProperty"
import {$AttachmentPropertyEvent, $AttachmentPropertyEvent$Type} from "packages/com/tacz/guns/api/event/common/$AttachmentPropertyEvent"
import {$TimelessForgeEventWrappers$AttachmentPropertyWrapper, $TimelessForgeEventWrappers$AttachmentPropertyWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$AttachmentPropertyWrapper"

export class $GunKubeJSEvents$AttachmentPropertyEventJS extends $GunKubeJSEvents$GunEventJS<($AttachmentPropertyEvent)> implements $TimelessForgeEventWrappers$AttachmentPropertyWrapper {

constructor(arg0: $AttachmentPropertyEvent$Type)

public "getGunItem"(): $ItemStack
public "getCacheProperty"(): $AttachmentCacheProperty
get "gunItem"(): $ItemStack
get "cacheProperty"(): $AttachmentCacheProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$AttachmentPropertyEventJS$Type = ($GunKubeJSEvents$AttachmentPropertyEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$AttachmentPropertyEventJS_ = $GunKubeJSEvents$AttachmentPropertyEventJS$Type;
}}
declare module "packages/com/tacz/guns/crafting/result/$RawGunTableResult" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GunSmithTableResult, $GunSmithTableResult$Type} from "packages/com/tacz/guns/crafting/result/$GunSmithTableResult"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GunResult, $GunResult$Type} from "packages/com/tacz/guns/resource/pojo/data/recipe/$GunResult"

export class $RawGunTableResult {

constructor(arg0: string, arg1: $ResourceLocation$Type, arg2: integer)

public "setExtraData"(arg0: $GunResult$Type): void
public "setNbt"(arg0: $CompoundTag$Type): void
public static "init"(arg0: $RawGunTableResult$Type): $GunSmithTableResult
set "extraData"(value: $GunResult$Type)
set "nbt"(value: $CompoundTag$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawGunTableResult$Type = ($RawGunTableResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawGunTableResult_ = $RawGunTableResult$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$GunDisplay" {
import {$DefaultAnimationType, $DefaultAnimationType$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$DefaultAnimationType"
import {$ControllableData, $ControllableData$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$ControllableData"
import {$TextShow, $TextShow$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$TextShow"
import {$MuzzleFlash, $MuzzleFlash$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$MuzzleFlash"
import {$AmmoCountStyle, $AmmoCountStyle$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$AmmoCountStyle"
import {$GunTransform, $GunTransform$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$GunTransform"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LaserConfig, $LaserConfig$Type} from "packages/com/tacz/guns/client/resource/pojo/display/$LaserConfig"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$DamageStyle, $DamageStyle$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$DamageStyle"
import {$GunLod, $GunLod$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$GunLod"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GunAmmo, $GunAmmo$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$GunAmmo"
import {$LayerGunShow, $LayerGunShow$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$LayerGunShow"
import {$ShellEjection, $ShellEjection$Type} from "packages/com/tacz/guns/client/resource/pojo/display/gun/$ShellEjection"
import {$IDisplay, $IDisplay$Type} from "packages/com/tacz/guns/client/resource/pojo/display/$IDisplay"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GunDisplay implements $IDisplay {

constructor()

public "is3rdFixedHand"(): boolean
public "getThirdPersonAnimation"(): string
public "getPlayerAnimator3rd"(): $ResourceLocation
public "isShowCrosshair"(): boolean
public "getControllableData"(): $EnumMap<($FireMode), ($ControllableData)>
public "getAmmoCountStyle"(): $AmmoCountStyle
public "getDamageStyle"(): $DamageStyle
public "getLaserConfig"(): $LaserConfig
public "enablesTransparency"(): boolean
public "getZoomModelFov"(): float
public "getTextShows"(): $Map<(string), ($TextShow)>
public "getModelType"(): string
public "getModelLocation"(): $ResourceLocation
public "getGunLod"(): $GunLod
public "getAnimationLocation"(): $ResourceLocation
public "getDefaultAnimation"(): $ResourceLocation
public "getDefaultAnimationType"(): $DefaultAnimationType
public "getStateMachineLocation"(): $ResourceLocation
public "getStateMachineParam"(): $Map<(string), (any)>
public "getPreloadSounds"(): $List<(string)>
public "getSlotTextureLocation"(): $ResourceLocation
public "getHudTextureLocation"(): $ResourceLocation
public "getHudEmptyTextureLocation"(): $ResourceLocation
public "getShellEjection"(): $ShellEjection
public "getGunAmmo"(): $GunAmmo
public "getMuzzleFlash"(): $MuzzleFlash
public "getOffhandShow"(): $LayerGunShow
public "getHotbarShow"(): $Map<(string), ($LayerGunShow)>
public "getSounds"(): $Map<(string), ($ResourceLocation)>
public "getModelTexture"(): $ResourceLocation
public "getTransform"(): $GunTransform
public "getIronZoom"(): float
public "init"(): void
get "3rdFixedHand"(): boolean
get "thirdPersonAnimation"(): string
get "playerAnimator3rd"(): $ResourceLocation
get "showCrosshair"(): boolean
get "controllableData"(): $EnumMap<($FireMode), ($ControllableData)>
get "ammoCountStyle"(): $AmmoCountStyle
get "damageStyle"(): $DamageStyle
get "laserConfig"(): $LaserConfig
get "zoomModelFov"(): float
get "textShows"(): $Map<(string), ($TextShow)>
get "modelType"(): string
get "modelLocation"(): $ResourceLocation
get "gunLod"(): $GunLod
get "animationLocation"(): $ResourceLocation
get "defaultAnimation"(): $ResourceLocation
get "defaultAnimationType"(): $DefaultAnimationType
get "stateMachineLocation"(): $ResourceLocation
get "stateMachineParam"(): $Map<(string), (any)>
get "preloadSounds"(): $List<(string)>
get "slotTextureLocation"(): $ResourceLocation
get "hudTextureLocation"(): $ResourceLocation
get "hudEmptyTextureLocation"(): $ResourceLocation
get "shellEjection"(): $ShellEjection
get "gunAmmo"(): $GunAmmo
get "muzzleFlash"(): $MuzzleFlash
get "offhandShow"(): $LayerGunShow
get "hotbarShow"(): $Map<(string), ($LayerGunShow)>
get "sounds"(): $Map<(string), ($ResourceLocation)>
get "modelTexture"(): $ResourceLocation
get "transform"(): $GunTransform
get "ironZoom"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunDisplay$Type = ($GunDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunDisplay_ = $GunDisplay$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$LayerGunShow" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"

export class $LayerGunShow {

constructor()

public "getRotate"(): $Vector3f
public "getScale"(): $Vector3f
public "getPos"(): $Vector3f
get "rotate"(): $Vector3f
get "scale"(): $Vector3f
get "pos"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerGunShow$Type = ($LayerGunShow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayerGunShow_ = $LayerGunShow$Type;
}}
declare module "packages/com/tacz/guns/api/item/gun/$FireMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FireMode extends $Enum<($FireMode)> {
static readonly "AUTO": $FireMode
static readonly "SEMI": $FireMode
static readonly "BURST": $FireMode
static readonly "UNKNOWN": $FireMode


public static "values"(): ($FireMode)[]
public static "valueOf"(arg0: string): $FireMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireMode$Type = (("auto") | ("semi") | ("burst") | ("unknown")) | ($FireMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireMode_ = $FireMode$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$AmmoCountStyle" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AmmoCountStyle extends $Enum<($AmmoCountStyle)> {
static readonly "NORMAL": $AmmoCountStyle
static readonly "PERCENT": $AmmoCountStyle


public static "values"(): ($AmmoCountStyle)[]
public static "valueOf"(arg0: string): $AmmoCountStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoCountStyle$Type = (("normal") | ("percent")) | ($AmmoCountStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoCountStyle_ = $AmmoCountStyle$Type;
}}
declare module "packages/com/tacz/guns/block/$AbstractGunSmithTableBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AbstractGunSmithTableBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
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

public "getRootPos"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
public "parseRotation"(arg0: $Direction$Type): float
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isRoot"(arg0: $BlockState$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGunSmithTableBlock$Type = ($AbstractGunSmithTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGunSmithTableBlock_ = $AbstractGunSmithTableBlock$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$AnimationListenerSupplier" {
import {$AnimationListener, $AnimationListener$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListener"
import {$ObjectAnimationChannel$ChannelType, $ObjectAnimationChannel$ChannelType$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimationChannel$ChannelType"

export interface $AnimationListenerSupplier {

 "supplyListeners"(arg0: string, arg1: $ObjectAnimationChannel$ChannelType$Type): $AnimationListener

(arg0: string, arg1: $ObjectAnimationChannel$ChannelType$Type): $AnimationListener
}

export namespace $AnimationListenerSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationListenerSupplier$Type = ($AnimationListenerSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationListenerSupplier_ = $AnimationListenerSupplier$Type;
}}
declare module "packages/com/tacz/guns/api/client/gameplay/$IClientPlayerGunOperator" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$LocalPlayerDataHolder, $LocalPlayerDataHolder$Type} from "packages/com/tacz/guns/client/gameplay/$LocalPlayerDataHolder"
import {$ShootResult, $ShootResult$Type} from "packages/com/tacz/guns/api/entity/$ShootResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IClientPlayerGunOperator {

 "aim"(arg0: boolean): void
 "reload"(): void
 "draw"(arg0: $ItemStack$Type): void
 "melee"(): void
 "inspect"(): void
 "getClientAimingProgress"(arg0: float): float
 "getClientShootCoolDown"(): long
 "resetDraw"(): void
 "isReadyToDraw"(): boolean
 "chargeShoot"(arg0: boolean): boolean
 "getChargeProgress"(): float
 "isCharging"(): boolean
 "bolt"(): void
 "shoot"(): $ShootResult
 "isAim"(): boolean
 "crawl"(arg0: boolean): void
 "isCrawl"(): boolean
 "getDataHolder"(): $LocalPlayerDataHolder
 "fireSelect"(): void
}

export namespace $IClientPlayerGunOperator {
function fromLocalPlayer(arg0: $LocalPlayer$Type): $IClientPlayerGunOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientPlayerGunOperator$Type = ($IClientPlayerGunOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientPlayerGunOperator_ = $IClientPlayerGunOperator$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$MoveSpeed" {
import {$List, $List$Type} from "packages/java/util/$List"

export class $MoveSpeed {

constructor()
constructor(arg0: float, arg1: float, arg2: float)

public "getReloadMultiplier"(): float
public "getBaseMultiplier"(): float
public "getAimMultiplier"(): float
public static "of"(arg0: $MoveSpeed$Type, arg1: $List$Type<($MoveSpeed$Type)>): $MoveSpeed
get "reloadMultiplier"(): float
get "baseMultiplier"(): float
get "aimMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoveSpeed$Type = ($MoveSpeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoveSpeed_ = $MoveSpeed$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/util/$AttachmentNbtFactory" {
import {$AttachmentItem, $AttachmentItem$Type} from "packages/com/tacz/guns/item/$AttachmentItem"
import {$TimelessItemNbtFactory, $TimelessItemNbtFactory$Type} from "packages/com/tacz/guns/compat/kubejs/util/$TimelessItemNbtFactory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AttachmentNbtFactory extends $TimelessItemNbtFactory<($AttachmentItem), ($AttachmentNbtFactory)> {

constructor()
constructor(arg0: $AttachmentItem$Type)

/**
 * 
 * @deprecated
 */
public "setSkinId"(arg0: $ResourceLocation$Type): void
public "build"(): $ItemStack
set "skinId"(value: $ResourceLocation$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentNbtFactory$Type = ($AttachmentNbtFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentNbtFactory_ = $AttachmentNbtFactory$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$AnimationChannelContent$LerpMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnimationChannelContent$LerpMode extends $Enum<($AnimationChannelContent$LerpMode)> {
static readonly "LINEAR": $AnimationChannelContent$LerpMode
static readonly "SPHERICAL_LINEAR": $AnimationChannelContent$LerpMode
static readonly "CATMULLROM": $AnimationChannelContent$LerpMode
static readonly "SPHERICAL_SQUAD": $AnimationChannelContent$LerpMode


public static "values"(): ($AnimationChannelContent$LerpMode)[]
public static "valueOf"(arg0: string): $AnimationChannelContent$LerpMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationChannelContent$LerpMode$Type = (("catmullrom") | ("linear") | ("spherical_linear") | ("spherical_squad")) | ($AnimationChannelContent$LerpMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationChannelContent$LerpMode_ = $AnimationChannelContent$LerpMode$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/$DiscreteTrackArray" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $DiscreteTrackArray implements $Iterable<(integer)> {

constructor()

public "addTrackLine"(): integer
public "getTrackLineSize"(): integer
public "assignNewTrack"(arg0: integer): integer
public "ensureTrackAmount"(arg0: integer, arg1: integer): void
public "getByIndex"(arg0: integer): $List<(integer)>
public "iterator"(): $Iterator<(integer)>
public "ensureCapacity"(arg0: integer): void
public "spliterator"(): $Spliterator<(integer)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<integer>;
get "trackLineSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiscreteTrackArray$Type = ($DiscreteTrackArray);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiscreteTrackArray_ = $DiscreteTrackArray$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$EntityHurtByGunEvent$Pre" {
import {$GunDamageSourcePart, $GunDamageSourcePart$Type} from "packages/com/tacz/guns/api/event/common/$GunDamageSourcePart"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EntityHurtByGunEvent, $EntityHurtByGunEvent$Type} from "packages/com/tacz/guns/api/event/common/$EntityHurtByGunEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityHurtByGunEvent$Pre extends $EntityHurtByGunEvent {

constructor(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $LivingEntity$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: float, arg6: $Pair$Type<($DamageSource$Type), ($DamageSource$Type)>, arg7: boolean, arg8: float, arg9: $LogicalSide$Type)
constructor()

public "setGunId"(arg0: $ResourceLocation$Type): void
public "setHeadshot"(arg0: boolean): void
public "setHeadshotMultiplier"(arg0: float): void
public "setHurtEntity"(arg0: $Entity$Type): void
public "setAttacker"(arg0: $LivingEntity$Type): void
public "setBaseAmount"(arg0: float): void
public "setDamageSource"(arg0: $GunDamageSourcePart$Type, arg1: $DamageSource$Type): void
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
set "gunId"(value: $ResourceLocation$Type)
set "headshot"(value: boolean)
set "headshotMultiplier"(value: float)
set "hurtEntity"(value: $Entity$Type)
set "attacker"(value: $LivingEntity$Type)
set "baseAmount"(value: float)
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHurtByGunEvent$Pre$Type = ($EntityHurtByGunEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityHurtByGunEvent$Pre_ = $EntityHurtByGunEvent$Pre$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$GunFireSelectEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $GunFireSelectEvent extends $Event implements $KubeJSGunEventPoster<($GunFireSelectEvent)> {

constructor(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LogicalSide$Type)
constructor()

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getShooter"(): $LivingEntity
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $GunFireSelectEvent$Type): void
public "postClientEventToKubeJS"(arg0: $GunFireSelectEvent$Type): void
public "postServerEventToKubeJS"(arg0: $GunFireSelectEvent$Type): void
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "shooter"(): $LivingEntity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunFireSelectEvent$Type = ($GunFireSelectEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunFireSelectEvent_ = $GunFireSelectEvent$Type;
}}
declare module "packages/com/tacz/guns/api/entity/$ShootResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ShootResult extends $Enum<($ShootResult)> {
static readonly "SUCCESS": $ShootResult
static readonly "UNKNOWN_FAIL": $ShootResult
static readonly "COOL_DOWN": $ShootResult
static readonly "NO_AMMO": $ShootResult
static readonly "NOT_DRAW": $ShootResult
static readonly "NOT_GUN": $ShootResult
static readonly "ID_NOT_EXIST": $ShootResult
static readonly "NEED_BOLT": $ShootResult
static readonly "IS_RELOADING": $ShootResult
static readonly "IS_DRAWING": $ShootResult
static readonly "IS_BOLTING": $ShootResult
static readonly "IS_MELEE": $ShootResult
static readonly "IS_SPRINTING": $ShootResult
static readonly "NETWORK_FAIL": $ShootResult
static readonly "FORGE_EVENT_CANCEL": $ShootResult
static readonly "OVERHEATED": $ShootResult


public static "values"(): ($ShootResult)[]
public static "valueOf"(arg0: string): $ShootResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShootResult$Type = (("is_sprinting") | ("not_draw") | ("unknown_fail") | ("is_melee") | ("is_reloading") | ("forge_event_cancel") | ("not_gun") | ("no_ammo") | ("id_not_exist") | ("success") | ("overheated") | ("is_bolting") | ("cool_down") | ("is_drawing") | ("need_bolt") | ("network_fail")) | ($ShootResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShootResult_ = $ShootResult$Type;
}}
declare module "packages/com/tacz/guns/client/model/bedrock/$BedrockModel" {
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$BedrockModelPOJO, $BedrockModelPOJO$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BedrockModelPOJO"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IFunctionalRenderer, $IFunctionalRenderer$Type} from "packages/com/tacz/guns/client/model/$IFunctionalRenderer"
import {$BonesItem, $BonesItem$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BonesItem"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$BedrockPart, $BedrockPart$Type} from "packages/com/tacz/guns/client/model/bedrock/$BedrockPart"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BedrockVersion, $BedrockVersion$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BedrockVersion"

export class $BedrockModel {
static "dummyModel": $BedrockModel

constructor(arg0: $BedrockModelPOJO$Type, arg1: $BedrockVersion$Type)

public "getBone"(arg0: string): $BonesItem
public "delegateRender"(arg0: $IFunctionalRenderer$Type): void
public "getShouldRender"(): $List<($BedrockPart)>
public "getIndexBones"(): $HashMap<(string), ($BonesItem)>
public "getNode"(arg0: string): $BedrockPart
public "render"(arg0: $PoseStack$Type, arg1: $ItemDisplayContext$Type, arg2: $RenderType$Type, arg3: integer, arg4: integer): void
public "render"(arg0: $PoseStack$Type, arg1: $ItemDisplayContext$Type, arg2: $RenderType$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "getSize"(): $Vec2
public "getOffset"(): $Vec3
get "shouldRender"(): $List<($BedrockPart)>
get "indexBones"(): $HashMap<(string), ($BonesItem)>
get "size"(): $Vec2
get "offset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedrockModel$Type = ($BedrockModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedrockModel_ = $BedrockModel$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/util/$AmmoNbtFactory" {
import {$AmmoItem, $AmmoItem$Type} from "packages/com/tacz/guns/item/$AmmoItem"
import {$TimelessItemNbtFactory, $TimelessItemNbtFactory$Type} from "packages/com/tacz/guns/compat/kubejs/util/$TimelessItemNbtFactory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AmmoNbtFactory extends $TimelessItemNbtFactory<($AmmoItem), ($AmmoNbtFactory)> {

constructor()
constructor(arg0: $AmmoItem$Type)

public "build"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoNbtFactory$Type = ($AmmoNbtFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoNbtFactory_ = $AmmoNbtFactory$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/model/$BedrockVersion" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BedrockModelPOJO, $BedrockModelPOJO$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BedrockModelPOJO"

export class $BedrockVersion extends $Enum<($BedrockVersion)> {
static readonly "LEGACY": $BedrockVersion
static readonly "NEW": $BedrockVersion


public static "isLegacyVersion"(arg0: $BedrockModelPOJO$Type): boolean
public static "isNewVersion"(arg0: $BedrockModelPOJO$Type): boolean
public "getVersion"(): string
public static "values"(): ($BedrockVersion)[]
public static "valueOf"(arg0: string): $BedrockVersion
get "version"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedrockVersion$Type = (("new") | ("legacy")) | ($BedrockVersion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedrockVersion_ = $BedrockVersion$Type;
}}
declare module "packages/com/tacz/guns/api/client/event/$RenderLevelBobEvent$BobHurt" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$RenderLevelBobEvent, $RenderLevelBobEvent$Type} from "packages/com/tacz/guns/api/client/event/$RenderLevelBobEvent"

export class $RenderLevelBobEvent$BobHurt extends $RenderLevelBobEvent {

constructor()

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLevelBobEvent$BobHurt$Type = ($RenderLevelBobEvent$BobHurt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderLevelBobEvent$BobHurt_ = $RenderLevelBobEvent$BobHurt$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"

export interface $TimelessForgeEventWrappers$ForgeEventWrapper<E extends $Event> {

 "getForgeEvent"(): E

(): E
}

export namespace $TimelessForgeEventWrappers$ForgeEventWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$ForgeEventWrapper$Type<E> = ($TimelessForgeEventWrappers$ForgeEventWrapper<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$ForgeEventWrapper_<E> = $TimelessForgeEventWrappers$ForgeEventWrapper$Type<(E)>;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$EntityHurtByGunPostEventJS" {
import {$GunDamageSourcePart, $GunDamageSourcePart$Type} from "packages/com/tacz/guns/api/event/common/$GunDamageSourcePart"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$TimelessForgeEventWrappers$EntityHurtByGunWrapper, $TimelessForgeEventWrappers$EntityHurtByGunWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$EntityHurtByGunWrapper"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$EntityHurtByGunEvent$Post, $EntityHurtByGunEvent$Post$Type} from "packages/com/tacz/guns/api/event/common/$EntityHurtByGunEvent$Post"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GunKubeJSEvents$EntityHurtByGunPostEventJS extends $GunKubeJSEvents$GunEventJS<($EntityHurtByGunEvent$Post)> implements $TimelessForgeEventWrappers$EntityHurtByGunWrapper<($EntityHurtByGunEvent$Post)> {

constructor(arg0: $EntityHurtByGunEvent$Post$Type)

public "getEventSubId"(): $ResourceLocation
public "getAttacker"(): $LivingEntity
public "getDamageSource"(arg0: $GunDamageSourcePart$Type): $DamageSource
public "getBullet"(): $Entity
public "getHurtEntity"(): $Entity
public "getBaseAmount"(): float
public "getHeadshotMultiplier"(): float
public "isHeadShot"(): boolean
public "getLogicalSide"(): $LogicalSide
public "getGunId"(): $ResourceLocation
get "eventSubId"(): $ResourceLocation
get "attacker"(): $LivingEntity
get "bullet"(): $Entity
get "hurtEntity"(): $Entity
get "baseAmount"(): float
get "headshotMultiplier"(): float
get "headShot"(): boolean
get "logicalSide"(): $LogicalSide
get "gunId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$EntityHurtByGunPostEventJS$Type = ($GunKubeJSEvents$EntityHurtByGunPostEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$EntityHurtByGunPostEventJS_ = $GunKubeJSEvents$EntityHurtByGunPostEventJS$Type;
}}
declare module "packages/com/tacz/guns/client/animation/statemachine/$ItemAnimationStateContext" {
import {$AnimationStateContext, $AnimationStateContext$Type} from "packages/com/tacz/guns/api/client/animation/statemachine/$AnimationStateContext"

export class $ItemAnimationStateContext extends $AnimationStateContext {

constructor()

public "getPartialTicks"(): float
public "getPutAwayTime"(): float
public "setPutAwayTime"(arg0: float): void
public "setPartialTicks"(arg0: float): void
get "partialTicks"(): float
get "putAwayTime"(): float
set "putAwayTime"(value: float)
set "partialTicks"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAnimationStateContext$Type = ($ItemAnimationStateContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAnimationStateContext_ = $ItemAnimationStateContext$Type;
}}
declare module "packages/com/tacz/guns/entity/$EntityKineticBullet" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vector2d, $Vector2d$Type} from "packages/org/joml/$Vector2d"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$GunData, $GunData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunData"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEntityAdditionalSpawnData, $IEntityAdditionalSpawnData$Type} from "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BulletData, $BulletData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$BulletData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityKineticBullet extends $Projectile implements $IEntityAdditionalSpawnData {
static readonly "TYPE": $EntityType<($EntityKineticBullet)>
static readonly "USE_MAGIC_DAMAGE_ON": $TagKey<($EntityType<(any)>)>
static readonly "USE_VOID_DAMAGE_ON": $TagKey<($EntityType<(any)>)>
static readonly "PRETEND_MELEE_DAMAGE_ON": $TagKey<($EntityType<(any)>)>
static readonly "TRACER_COLOR_OVERRIDER_KEY": string
static readonly "TRACER_SIZE_OVERRIDER_KEY": string
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "position": $Vec3
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "stepHeight": float
 "noPhysics": boolean
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalEntrancePos": $BlockPos
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "ars_Nouveau$motions": $Stack<(any)>
 "an_isRewinding": boolean

constructor(arg0: $EntityType$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: $Level$Type)
constructor(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type, arg6: boolean, arg7: $GunData$Type, arg8: $BulletData$Type)
constructor(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: boolean, arg6: $GunData$Type, arg7: $BulletData$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "shootFromRotation"(arg0: $Entity$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $Vector2d$Type): void
public "getAmmoId"(): $ResourceLocation
public "getGunDisplayId"(): $ResourceLocation
public "isTracerAmmo"(): boolean
public "applyShotgunDamageSpread"(arg0: integer): void
public "setShotDamageMultiplier"(arg0: float): void
public "getCameraYRot"(): float
public "setCameraYRot"(arg0: float): void
public "getCameraXRot"(): float
public "setCameraXRot"(arg0: float): void
public "getFirstPersonRenderOffset"(): $Vector3f
public "setFirstPersonRenderOffset"(arg0: $Vector3f$Type): void
public "getTracerColorOverride"(): $Optional<((float)[])>
public "getTracerSizeOverride"(): float
public "getGunId"(): $ResourceLocation
public "writeSpawnData"(arg0: $FriendlyByteBuf$Type): void
public "readSpawnData"(arg0: $FriendlyByteBuf$Type): void
public "m_150171_"(arg0: $Entity$Type): boolean
public "getRandom"(): $RandomSource
public "tick"(): void
public "shoot"(arg0: double, arg1: double, arg2: float, arg3: $Vector2d$Type): void
public "getDamage"(arg0: $Vec3$Type): float
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "ammoId"(): $ResourceLocation
get "gunDisplayId"(): $ResourceLocation
get "tracerAmmo"(): boolean
set "shotDamageMultiplier"(value: float)
get "cameraYRot"(): float
set "cameraYRot"(value: float)
get "cameraXRot"(): float
set "cameraXRot"(value: float)
get "firstPersonRenderOffset"(): $Vector3f
set "firstPersonRenderOffset"(value: $Vector3f$Type)
get "tracerColorOverride"(): $Optional<((float)[])>
get "tracerSizeOverride"(): float
get "gunId"(): $ResourceLocation
get "random"(): $RandomSource
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityKineticBullet$Type = ($EntityKineticBullet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityKineticBullet_ = $EntityKineticBullet$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/recipe/$GunResult" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $GunResult {

constructor()

public "getAttachments"(): $EnumMap<($AttachmentType), ($ResourceLocation)>
public "getAmmoCount"(): integer
get "attachments"(): $EnumMap<($AttachmentType), ($ResourceLocation)>
get "ammoCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunResult$Type = ($GunResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunResult_ = $GunResult$Type;
}}
declare module "packages/com/tacz/guns/api/entity/$KnockBackModifier" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $KnockBackModifier {

 "resetKnockBackStrength"(): void
 "getKnockBackStrength"(): double
 "setKnockBackStrength"(arg0: double): void
}

export namespace $KnockBackModifier {
function fromLivingEntity(arg0: $LivingEntity$Type): $KnockBackModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnockBackModifier$Type = ($KnockBackModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnockBackModifier_ = $KnockBackModifier$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"

export interface $KubeJSGunEventPoster<E extends $Event> {

 "postEventToKubeJS"(arg0: E): void
 "postClientEventToKubeJS"(arg0: E): void
 "postServerEventToKubeJS"(arg0: E): void
}

export namespace $KubeJSGunEventPoster {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSGunEventPoster$Type<E> = ($KubeJSGunEventPoster<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSGunEventPoster_<E> = $KubeJSGunEventPoster$Type<(E)>;
}}
declare module "packages/com/tacz/guns/api/event/common/$GunMeleeEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $GunMeleeEvent extends $Event implements $KubeJSGunEventPoster<($GunMeleeEvent)> {

constructor(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LogicalSide$Type)
constructor()

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getShooter"(): $LivingEntity
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $GunMeleeEvent$Type): void
public "postClientEventToKubeJS"(arg0: $GunMeleeEvent$Type): void
public "postServerEventToKubeJS"(arg0: $GunMeleeEvent$Type): void
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "shooter"(): $LivingEntity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunMeleeEvent$Type = ($GunMeleeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunMeleeEvent_ = $GunMeleeEvent$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$EntityHurtByGunWrapper" {
import {$GunDamageSourcePart, $GunDamageSourcePart$Type} from "packages/com/tacz/guns/api/event/common/$GunDamageSourcePart"
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EntityHurtByGunEvent, $EntityHurtByGunEvent$Type} from "packages/com/tacz/guns/api/event/common/$EntityHurtByGunEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $TimelessForgeEventWrappers$EntityHurtByGunWrapper<E extends $EntityHurtByGunEvent> extends $TimelessForgeEventWrappers$ForgeEventWrapper<(E)> {

 "getAttacker"(): $LivingEntity
 "getDamageSource"(arg0: $GunDamageSourcePart$Type): $DamageSource
 "getBullet"(): $Entity
 "getHurtEntity"(): $Entity
 "getBaseAmount"(): float
 "getHeadshotMultiplier"(): float
 "isHeadShot"(): boolean
 "getLogicalSide"(): $LogicalSide
 "getGunId"(): $ResourceLocation
 "getForgeEvent"(): E

(): $LivingEntity
}

export namespace $TimelessForgeEventWrappers$EntityHurtByGunWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$EntityHurtByGunWrapper$Type<E> = ($TimelessForgeEventWrappers$EntityHurtByGunWrapper<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$EntityHurtByGunWrapper_<E> = $TimelessForgeEventWrappers$EntityHurtByGunWrapper$Type<(E)>;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunMeleeWrapper" {
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$GunMeleeEvent, $GunMeleeEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunMeleeEvent"

export interface $TimelessForgeEventWrappers$GunMeleeWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($GunMeleeEvent)> {

 "getLogicalSide"(): $LogicalSide
 "getGunItemStack"(): $ItemStack
 "getShooter"(): $LivingEntity
 "getForgeEvent"(): $GunMeleeEvent

(): $LogicalSide
}

export namespace $TimelessForgeEventWrappers$GunMeleeWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$GunMeleeWrapper$Type = ($TimelessForgeEventWrappers$GunMeleeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$GunMeleeWrapper_ = $TimelessForgeEventWrappers$GunMeleeWrapper$Type;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$BurstData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BurstData {

constructor()

public "getBpm"(): integer
public "isContinuousShoot"(): boolean
public "getCount"(): integer
public "getMinInterval"(): double
get "bpm"(): integer
get "continuousShoot"(): boolean
get "count"(): integer
get "minInterval"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BurstData$Type = ($BurstData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BurstData_ = $BurstData$Type;
}}
declare module "packages/com/tacz/guns/client/model/functional/$ShellRender" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BedrockGunModel, $BedrockGunModel$Type} from "packages/com/tacz/guns/client/model/$BedrockGunModel"
import {$IFunctionalRenderer, $IFunctionalRenderer$Type} from "packages/com/tacz/guns/client/model/$IFunctionalRenderer"

export class $ShellRender implements $IFunctionalRenderer {
static "isSelf": boolean

constructor(arg0: $BedrockGunModel$Type)

public "addShell"(arg0: $Vector3f$Type): void
public "render"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $ItemDisplayContext$Type, arg3: integer, arg4: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShellRender$Type = ($ShellRender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShellRender_ = $ShellRender$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunFinishReloadEventJS" {
import {$GunFinishReloadEvent, $GunFinishReloadEvent$Type} from "packages/com/tacz/guns/api/event/common/$GunFinishReloadEvent"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TimelessForgeEventWrappers$GunFinishReloadWrapper, $TimelessForgeEventWrappers$GunFinishReloadWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$GunFinishReloadWrapper"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $GunKubeJSEvents$GunFinishReloadEventJS extends $GunKubeJSEvents$GunEventJS<($GunFinishReloadEvent)> implements $TimelessForgeEventWrappers$GunFinishReloadWrapper {

constructor(arg0: $GunFinishReloadEvent$Type)

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$GunFinishReloadEventJS$Type = ($GunKubeJSEvents$GunFinishReloadEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$GunFinishReloadEventJS_ = $GunKubeJSEvents$GunFinishReloadEventJS$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$AttachmentPropertyWrapper" {
import {$TimelessForgeEventWrappers$ForgeEventWrapper, $TimelessForgeEventWrappers$ForgeEventWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$ForgeEventWrapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AttachmentCacheProperty, $AttachmentCacheProperty$Type} from "packages/com/tacz/guns/resource/modifier/$AttachmentCacheProperty"
import {$AttachmentPropertyEvent, $AttachmentPropertyEvent$Type} from "packages/com/tacz/guns/api/event/common/$AttachmentPropertyEvent"

export interface $TimelessForgeEventWrappers$AttachmentPropertyWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<($AttachmentPropertyEvent)> {

 "getGunItem"(): $ItemStack
 "getCacheProperty"(): $AttachmentCacheProperty
 "getForgeEvent"(): $AttachmentPropertyEvent

(): $ItemStack
}

export namespace $TimelessForgeEventWrappers$AttachmentPropertyWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelessForgeEventWrappers$AttachmentPropertyWrapper$Type = ($TimelessForgeEventWrappers$AttachmentPropertyWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimelessForgeEventWrappers$AttachmentPropertyWrapper_ = $TimelessForgeEventWrappers$AttachmentPropertyWrapper$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/custom/$CustomGunItemBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomGunItemBuilder extends $ItemBuilder {
 "typeName": string
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "setTypeName"(arg0: string): void
set "typeName"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomGunItemBuilder$Type = ($CustomGunItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomGunItemBuilder_ = $CustomGunItemBuilder$Type;
}}
declare module "packages/com/tacz/guns/crafting/$GunSmithTableRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$GunSmithTableIngredient, $GunSmithTableIngredient$Type} from "packages/com/tacz/guns/crafting/$GunSmithTableIngredient"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$GunSmithTableResult, $GunSmithTableResult$Type} from "packages/com/tacz/guns/crafting/result/$GunSmithTableResult"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TableRecipe, $TableRecipe$Type} from "packages/com/tacz/guns/resource/pojo/data/recipe/$TableRecipe"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $GunSmithTableRecipe implements $Recipe<($Inventory)> {

constructor(arg0: $ResourceLocation$Type, arg1: $GunSmithTableResult$Type, arg2: $List$Type<($GunSmithTableIngredient$Type)>)
constructor(arg0: $ResourceLocation$Type, arg1: $TableRecipe$Type)

public "getTab"(): $ResourceLocation
public "getId"(): $ResourceLocation
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getOutput"(): $ItemStack
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $Inventory$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getInputs"(): $List<($GunSmithTableIngredient)>
public "getResult"(): $GunSmithTableResult
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "matches"(arg0: $Inventory$Type, arg1: $Level$Type): boolean
public "init"(): void
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $Inventory$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getMod"(): string
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getType"(): $ResourceLocation
get "tab"(): $ResourceLocation
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "output"(): $ItemStack
get "inputs"(): $List<($GunSmithTableIngredient)>
get "result"(): $GunSmithTableResult
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "mod"(): string
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableRecipe$Type = ($GunSmithTableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableRecipe_ = $GunSmithTableRecipe$Type;
}}
declare module "packages/com/tacz/guns/client/model/bedrock/$BedrockPart" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$ObjectList, $ObjectList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectList"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BedrockCube, $BedrockCube$Type} from "packages/com/tacz/guns/client/model/bedrock/$BedrockCube"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $BedrockPart {
readonly "name": string
readonly "cubes": $ObjectList<($BedrockCube)>
readonly "children": $ObjectList<($BedrockPart)>
 "x": float
 "y": float
 "z": float
 "xRot": float
 "yRot": float
 "zRot": float
 "offsetX": float
 "offsetY": float
 "offsetZ": float
 "visible": boolean
 "illuminated": boolean
 "mirror": boolean
 "additionalQuaternion": $Quaternionf
 "xScale": float
 "yScale": float
 "zScale": float

constructor(arg0: string)

public "getRandomCube"(arg0: $Random$Type): $BedrockCube
public "translateAndRotateAndScale"(arg0: $PoseStack$Type): void
public "setInitRotationAngle"(arg0: float, arg1: float, arg2: float): void
public "getInitRotX"(): float
public "getInitRotY"(): float
public "getInitRotZ"(): float
public "render"(arg0: $PoseStack$Type, arg1: $ItemDisplayContext$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer): void
public "render"(arg0: $PoseStack$Type, arg1: $ItemDisplayContext$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "addChild"(arg0: $BedrockPart$Type): void
public "setPos"(arg0: float, arg1: float, arg2: float): void
public "isEmpty"(): boolean
public "compile"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float): void
public "getParent"(): $BedrockPart
get "initRotX"(): float
get "initRotY"(): float
get "initRotZ"(): float
get "empty"(): boolean
get "parent"(): $BedrockPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedrockPart$Type = ($BedrockPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedrockPart_ = $BedrockPart$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$DamageStyle" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DamageStyle extends $Enum<($DamageStyle)> {
static readonly "TOTAL": $DamageStyle
static readonly "PER_PROJECTILE": $DamageStyle


public static "values"(): ($DamageStyle)[]
public static "valueOf"(arg0: string): $DamageStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageStyle$Type = (("total") | ("per_projectile")) | ($DamageStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageStyle_ = $DamageStyle$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$GunTransform" {
import {$TransformScale, $TransformScale$Type} from "packages/com/tacz/guns/client/resource/pojo/$TransformScale"

export class $GunTransform {

constructor()

public "getScale"(): $TransformScale
public static "getDefault"(): $GunTransform
get "scale"(): $TransformScale
get "default"(): $GunTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunTransform$Type = ($GunTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunTransform_ = $GunTransform$Type;
}}
declare module "packages/com/tacz/guns/init/$ModParticles$ModParticleType" {
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ModParticles$ModParticleType<T extends $ParticleOptions> extends $ParticleType<(T)> {

constructor(arg0: boolean, arg1: $ParticleOptions$Deserializer$Type<(T)>, arg2: $Codec$Type<(T)>)

public "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModParticles$ModParticleType$Type<T> = ($ModParticles$ModParticleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModParticles$ModParticleType_<T> = $ModParticles$ModParticleType$Type<(T)>;
}}
declare module "packages/com/tacz/guns/api/item/gun/$AbstractGunItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GunProperty, $GunProperty$Type} from "packages/com/tacz/guns/api/$GunProperty"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GunTabType, $GunTabType$Type} from "packages/com/tacz/guns/api/item/$GunTabType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ShooterDataHolder, $ShooterDataHolder$Type} from "packages/com/tacz/guns/entity/shooter/$ShooterDataHolder"
import {$IGun, $IGun$Type} from "packages/com/tacz/guns/api/item/$IGun"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$ReloadState, $ReloadState$Type} from "packages/com/tacz/guns/api/entity/$ReloadState"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IAnimationItem, $IAnimationItem$Type} from "packages/com/tacz/guns/api/item/$IAnimationItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractGunItem extends $Item implements $IGun, $IAnimationItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any


public "isSame"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "interruptReload"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): void
public "doBulletSpread"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $Projectile$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "canReload"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): boolean
public "useInventoryAmmo"(arg0: $ItemStack$Type): boolean
public "dropAllAmmo"(arg0: $Player$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "findAndExtractInventoryAmmos"(arg0: $IItemHandler$Type, arg1: $ItemStack$Type, arg2: integer): integer
public "findAndExtractInventoryAmmo"(arg0: $IItemHandler$Type, arg1: $ItemStack$Type, arg2: integer): integer
public "findAndExtractDummyAmmo"(arg0: $ItemStack$Type, arg1: integer): integer
public "allowAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "startBolt"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): boolean
public "startReload"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): boolean
public "tickReload"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $ReloadState
public "allowAttachmentType"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): boolean
public "hasInventoryAmmo"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getRPM"(arg0: $ItemStack$Type): integer
public "isCanCrawl"(arg0: $ItemStack$Type): boolean
public static "fillItemCategory"(arg0: $GunTabType$Type): $NonNullList<($ItemStack)>
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public "melee"(arg0: $ShooterDataHolder$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "shoot"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $Supplier$Type<(float)>, arg3: $Supplier$Type<(float)>, arg4: $LivingEntity$Type): void
public "fireSelect"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type): void
public "tickBolt"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): boolean
public "tickHeat"(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): void
public "getCurrentAmmoCount"(arg0: $ItemStack$Type): integer
public "useDummyAmmo"(arg0: $ItemStack$Type): boolean
public "getDummyAmmoAmount"(arg0: $ItemStack$Type): integer
public "addDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "getGunDisplayId"(arg0: $ItemStack$Type): $ResourceLocation
public "getFireMode"(arg0: $ItemStack$Type): $FireMode
public "hasHeatData"(arg0: $ItemStack$Type): boolean
public "lerpRPM"(arg0: $ItemStack$Type): float
public "setFireMode"(arg0: $ItemStack$Type, arg1: $FireMode$Type): void
public "setCurrentAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
/**
 * 
 * @deprecated
 */
public static "mainhandHoldGun"(arg0: $LivingEntity$Type): boolean
public static "mainHandHoldGun"(arg0: $LivingEntity$Type): boolean
/**
 * 
 * @deprecated
 */
public static "getMainhandFireMode"(arg0: $LivingEntity$Type): $FireMode
public static "getMainHandFireMode"(arg0: $LivingEntity$Type): $FireMode
public "getAimingZoom"(arg0: $ItemStack$Type): float
public "setDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "hasMaxDummyAmmo"(arg0: $ItemStack$Type): boolean
public "getMaxDummyAmmoAmount"(arg0: $ItemStack$Type): integer
public "setMaxDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "hasAttachmentLock"(arg0: $ItemStack$Type): boolean
public "setAttachmentLock"(arg0: $ItemStack$Type, arg1: boolean): void
public "setGunId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "setGunDisplayId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "getExpToNextLevel"(arg0: $ItemStack$Type): integer
public "getExpCurrentLevel"(arg0: $ItemStack$Type): integer
public "reduceCurrentAmmoCount"(arg0: $ItemStack$Type): void
public "modifyProperty"<T>(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: string, arg4: string, arg5: $Class$Type<(T)>, arg6: T): T
public "modifyProperty"<T>(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: string, arg4: $Class$Type<(T)>, arg5: T): T
public "modifyProperty"<T>(arg0: $ShooterDataHolder$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $GunProperty$Type<(any)>, arg4: $Class$Type<(T)>, arg5: T): T
public "getBuiltinAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
public "installAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
public "unloadAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): void
public "hasBulletInBarrel"(arg0: $ItemStack$Type): boolean
public "setBulletInBarrel"(arg0: $ItemStack$Type, arg1: boolean): void
public "hasCustomLaserColor"(arg0: $ItemStack$Type): boolean
public "getLaserColor"(arg0: $ItemStack$Type): integer
public "setLaserColor"(arg0: $ItemStack$Type, arg1: integer): void
public "isOverheatLocked"(arg0: $ItemStack$Type): boolean
public "setOverheatLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public "setHeatAmount"(arg0: $ItemStack$Type, arg1: float): void
public "lerpInaccuracy"(arg0: $ItemStack$Type): float
public "getHeatAmount"(arg0: $ItemStack$Type): float
public "getExp"(arg0: $ItemStack$Type): integer
public "getExp"(arg0: integer): integer
public "getAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
public "getGunId"(arg0: $ItemStack$Type): $ResourceLocation
public "getLevel"(arg0: $ItemStack$Type): integer
public "getLevel"(arg0: integer): integer
public "getMaxLevel"(): integer
public "getAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
public static "getIGunOrNull"(arg0: $ItemStack$Type): $IGun
public "getBuiltInAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
public "getAttachmentTag"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $CompoundTag
public static "matchesIgnoreCount"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGunItem$Type = ($AbstractGunItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGunItem_ = $AbstractGunItem$Type;
}}
declare module "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$BeforeRenderHandEventJS" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$GunKubeJSEvents$GunEventJS, $GunKubeJSEvents$GunEventJS$Type} from "packages/com/tacz/guns/compat/kubejs/events/$GunKubeJSEvents$GunEventJS"
import {$BeforeRenderHandEvent, $BeforeRenderHandEvent$Type} from "packages/com/tacz/guns/api/client/event/$BeforeRenderHandEvent"
import {$TimelessForgeEventWrappers$BeforeRenderHandWrapper, $TimelessForgeEventWrappers$BeforeRenderHandWrapper$Type} from "packages/com/tacz/guns/compat/kubejs/events/$TimelessForgeEventWrappers$BeforeRenderHandWrapper"

export class $GunKubeJSEvents$BeforeRenderHandEventJS extends $GunKubeJSEvents$GunEventJS<($BeforeRenderHandEvent)> implements $TimelessForgeEventWrappers$BeforeRenderHandWrapper {

constructor(arg0: $BeforeRenderHandEvent$Type)

public "getPoseStack"(): $PoseStack
get "poseStack"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunKubeJSEvents$BeforeRenderHandEventJS$Type = ($GunKubeJSEvents$BeforeRenderHandEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunKubeJSEvents$BeforeRenderHandEventJS_ = $GunKubeJSEvents$BeforeRenderHandEventJS$Type;
}}
declare module "packages/com/tacz/guns/api/event/common/$GunFinishReloadEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$KubeJSGunEventPoster, $KubeJSGunEventPoster$Type} from "packages/com/tacz/guns/api/event/common/$KubeJSGunEventPoster"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $GunFinishReloadEvent extends $Event implements $KubeJSGunEventPoster<($GunFinishReloadEvent)> {

constructor(arg0: $ItemStack$Type, arg1: $LogicalSide$Type)
constructor()

public "getLogicalSide"(): $LogicalSide
public "getGunItemStack"(): $ItemStack
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "postEventToKubeJS"(arg0: $GunFinishReloadEvent$Type): void
public "postClientEventToKubeJS"(arg0: $GunFinishReloadEvent$Type): void
public "postServerEventToKubeJS"(arg0: $GunFinishReloadEvent$Type): void
get "logicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunFinishReloadEvent$Type = ($GunFinishReloadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunFinishReloadEvent_ = $GunFinishReloadEvent$Type;
}}
declare module "packages/com/tacz/guns/api/client/animation/interpolator/$Interpolator" {
import {$AnimationChannelContent, $AnimationChannelContent$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationChannelContent"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export interface $Interpolator extends $Cloneable {

 "interpolate"(arg0: integer, arg1: integer, arg2: float): (float)[]
 "clone"(): $Interpolator
 "compile"(arg0: $AnimationChannelContent$Type): void
}

export namespace $Interpolator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Interpolator$Type = ($Interpolator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Interpolator_ = $Interpolator$Type;
}}
declare module "packages/com/tacz/guns/client/resource/pojo/display/gun/$GunLod" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GunLod {

constructor()

public "getModelLocation"(): $ResourceLocation
public "getModelTexture"(): $ResourceLocation
get "modelLocation"(): $ResourceLocation
get "modelTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunLod$Type = ($GunLod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunLod_ = $GunLod$Type;
}}
declare module "packages/com/tacz/guns/client/model/$BedrockAnimatedModel" {
import {$AnimationListener, $AnimationListener$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListener"
import {$ConstraintObject, $ConstraintObject$Type} from "packages/com/tacz/guns/client/model/listener/constraint/$ConstraintObject"
import {$BedrockModelPOJO, $BedrockModelPOJO$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BedrockModelPOJO"
import {$BedrockModel, $BedrockModel$Type} from "packages/com/tacz/guns/client/model/bedrock/$BedrockModel"
import {$IFunctionalRenderer, $IFunctionalRenderer$Type} from "packages/com/tacz/guns/client/model/$IFunctionalRenderer"
import {$BedrockPart, $BedrockPart$Type} from "packages/com/tacz/guns/client/model/bedrock/$BedrockPart"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ObjectAnimationChannel$ChannelType, $ObjectAnimationChannel$ChannelType$Type} from "packages/com/tacz/guns/api/client/animation/$ObjectAnimationChannel$ChannelType"
import {$AnimationListenerSupplier, $AnimationListenerSupplier$Type} from "packages/com/tacz/guns/api/client/animation/$AnimationListenerSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CameraAnimationObject, $CameraAnimationObject$Type} from "packages/com/tacz/guns/client/model/listener/camera/$CameraAnimationObject"
import {$BedrockVersion, $BedrockVersion$Type} from "packages/com/tacz/guns/client/resource/pojo/model/$BedrockVersion"

export class $BedrockAnimatedModel extends $BedrockModel implements $AnimationListenerSupplier {
static readonly "CAMERA_NODE_NAME": string
static readonly "CONSTRAINT_NODE": string
static "dummyModel": $BedrockModel

constructor(arg0: $BedrockModelPOJO$Type, arg1: $BedrockVersion$Type)

public "getIdleSightPath"(): $List<($BedrockPart)>
public "getConstraintPath"(): $List<($BedrockPart)>
public "getConstraintObject"(): $ConstraintObject
public "cleanAnimationTransform"(): void
public "cleanCameraAnimationTransform"(): void
public "setFunctionalRenderer"(arg0: string, arg1: $Function$Type<($BedrockPart$Type), ($IFunctionalRenderer$Type)>): void
public "getCameraAnimationObject"(): $CameraAnimationObject
public "supplyListeners"(arg0: string, arg1: $ObjectAnimationChannel$ChannelType$Type): $AnimationListener
public "getRenderHand"(): boolean
public "getRootNode"(): $BedrockPart
get "idleSightPath"(): $List<($BedrockPart)>
get "constraintPath"(): $List<($BedrockPart)>
get "constraintObject"(): $ConstraintObject
get "cameraAnimationObject"(): $CameraAnimationObject
get "renderHand"(): boolean
get "rootNode"(): $BedrockPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedrockAnimatedModel$Type = ($BedrockAnimatedModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedrockAnimatedModel_ = $BedrockAnimatedModel$Type;
}}
declare module "packages/com/tacz/guns/api/modifier/$ParameterizedCache" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Modifier, $Modifier$Type} from "packages/com/tacz/guns/resource/pojo/data/attachment/$Modifier"

export class $ParameterizedCache<T> {

constructor(arg0: $List$Type<($Modifier$Type)>, arg1: T)

public "eval"(arg0: double, arg1: double, arg2: double, arg3: double): double
public "eval"(arg0: double): double
public static "of"<T>(arg0: T): $ParameterizedCache<(T)>
public static "of"<T>(arg0: $List$Type<($Modifier$Type)>, arg1: T): $ParameterizedCache<(T)>
public "getDefaultValue"(): T
get "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParameterizedCache$Type<T> = ($ParameterizedCache<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParameterizedCache_<T> = $ParameterizedCache$Type<(T)>;
}}
declare module "packages/com/tacz/guns/resource/pojo/data/gun/$GunReloadData" {
import {$GunReloadTime, $GunReloadTime$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunReloadTime"
import {$FeedType, $FeedType$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$FeedType"

export class $GunReloadData {

constructor()

public "getCooldown"(): $GunReloadTime
public "getFeed"(): $GunReloadTime
public "getType"(): $FeedType
public "isInfinite"(): boolean
get "cooldown"(): $GunReloadTime
get "feed"(): $GunReloadTime
get "type"(): $FeedType
get "infinite"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunReloadData$Type = ($GunReloadData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunReloadData_ = $GunReloadData$Type;
}}
