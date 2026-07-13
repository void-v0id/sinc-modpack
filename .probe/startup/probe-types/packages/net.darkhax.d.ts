declare module "packages/net/darkhax/botanypots/data/recipes/crop/$HarvestEntry" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $HarvestEntry {

constructor(arg0: float, arg1: $ItemStack$Type, arg2: integer, arg3: integer)

public "getChance"(): float
public "getMinRolls"(): integer
public "getMaxRolls"(): integer
public "getItem"(): $ItemStack
get "chance"(): float
get "minRolls"(): integer
get "maxRolls"(): integer
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestEntry$Type = ($HarvestEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HarvestEntry_ = $HarvestEntry$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/entity/$AccessorLivingEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AccessorLivingEntity {

 "bookshelf$getHurtSound"(arg0: $DamageSource$Type): $SoundEvent
 "bookshelf$getDeathSound"(): $SoundEvent
 "bookshelf$getFallDamageSound"(arg0: integer): $SoundEvent
 "bookshelf$getDrinkingSound"(arg0: $ItemStack$Type): $SoundEvent
 "bookshelf$makePoofParticles"(): void
}

export namespace $AccessorLivingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLivingEntity$Type = ($AccessorLivingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorLivingEntity_ = $AccessorLivingEntity$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/soil/$Soil" {
import {$Crop, $Crop$Type} from "packages/net/darkhax/botanypots/data/recipes/crop/$Crop"
import {$BlockEntityBotanyPot, $BlockEntityBotanyPot$Type} from "packages/net/darkhax/botanypots/block/$BlockEntityBotanyPot"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DisplayState, $DisplayState$Type} from "packages/net/darkhax/botanypots/data/displaystate/$DisplayState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RecipeBaseData, $RecipeBaseData$Type} from "packages/net/darkhax/bookshelf/api/data/recipes/$RecipeBaseData"

export class $Soil extends $RecipeBaseData<($Container)> {

constructor(arg0: $ResourceLocation$Type)

public "matchesLookup"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $ItemStack$Type): boolean
public "onGrowthTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $Crop$Type): void
public "getDisplayState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): $DisplayState
public "getGrowthModifier"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $Crop$Type): float
public "getLightLevel"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): integer
public "getCategories"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): $Set<(string)>
public "canGrowCrop"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $Crop$Type): boolean
public "onTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Soil$Type = ($Soil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Soil_ = $Soil$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/crop/$Crop" {
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Soil, $Soil$Type} from "packages/net/darkhax/botanypots/data/recipes/soil/$Soil"
import {$BlockEntityBotanyPot, $BlockEntityBotanyPot$Type} from "packages/net/darkhax/botanypots/block/$BlockEntityBotanyPot"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DisplayState, $DisplayState$Type} from "packages/net/darkhax/botanypots/data/displaystate/$DisplayState"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RecipeBaseData, $RecipeBaseData$Type} from "packages/net/darkhax/bookshelf/api/data/recipes/$RecipeBaseData"

export class $Crop extends $RecipeBaseData<($Container)> {

constructor(arg0: $ResourceLocation$Type)

public "matchesLookup"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $ItemStack$Type): boolean
public "onGrowthTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $Soil$Type): void
public "getDisplayState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): $List<($DisplayState)>
public "getLightLevel"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): integer
public "getCategories"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): $Set<(string)>
public "getGrowthTicks"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $Soil$Type): integer
public "canGrowInSoil"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $Soil$Type): boolean
public "generateDrops"(arg0: $Random$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockEntityBotanyPot$Type): $List<($ItemStack)>
public "onTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Crop$Type = ($Crop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Crop_ = $Crop$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/fertilizer/$BasicFertilizerSerializer" {
import {$BasicFertilizer, $BasicFertilizer$Type} from "packages/net/darkhax/botanypots/data/recipes/fertilizer/$BasicFertilizer"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BasicFertilizerSerializer implements $RecipeSerializer<($BasicFertilizer)> {
static readonly "SERIALIZER": $RecipeSerializer<(any)>

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BasicFertilizer$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BasicFertilizer
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BasicFertilizer
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BasicFertilizer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicFertilizerSerializer$Type = ($BasicFertilizerSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicFertilizerSerializer_ = $BasicFertilizerSerializer$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/data/recipes/$RecipeBase" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $RecipeBase<C extends $Container> implements $Recipe<(C)> {

constructor(arg0: $ResourceLocation$Type)

public "getId"(): $ResourceLocation
public "assemble"(arg0: C, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: C, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isIncomplete"(): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
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
get "id"(): $ResourceLocation
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
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
export type $RecipeBase$Type<C> = ($RecipeBase<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeBase_<C> = $RecipeBase$Type<(C)>;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/world/$AccessorStructureTemplatePool" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $AccessorStructureTemplatePool {

 "bookshelf$setRawTemplates"(arg0: $List$Type<($Pair$Type<($StructurePoolElement$Type), (integer)>)>): void
 "bookshelf$getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "bookshelf$setTemplates"(arg0: $ObjectArrayList$Type<($StructurePoolElement$Type)>): void
 "bookshelf$getTemplates"(): $ObjectArrayList<($StructurePoolElement)>
}

export namespace $AccessorStructureTemplatePool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorStructureTemplatePool$Type = ($AccessorStructureTemplatePool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorStructureTemplatePool_ = $AccessorStructureTemplatePool$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/block/$InventoryBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $InventoryBlock extends $BaseEntityBlock {
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

public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryBlock$Type = ($InventoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryBlock_ = $InventoryBlock$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/data/sound/$Sound" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISound, $ISound$Type} from "packages/net/darkhax/bookshelf/api/data/sound/$ISound"
import {$ISerializer, $ISerializer$Type} from "packages/net/darkhax/bookshelf/api/serialization/$ISerializer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Sound implements $ISound {
static readonly "SERIALIZER": $ISerializer<($Sound)>

constructor(arg0: $SoundEvent$Type, arg1: $SoundSource$Type, arg2: float, arg3: float)

public "playSoundAt"(arg0: $Level$Type, arg1: $Player$Type, arg2: double, arg3: double, arg4: double): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "playSoundAt"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type): void
public "playSoundAt"(arg0: $Level$Type, arg1: $Player$Type, arg2: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sound$Type = ($Sound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Sound_ = $Sound$Type;
}}
declare module "packages/net/darkhax/botanypots/data/displaystate/$DisplayState" {
import {$DisplayStateSerializer, $DisplayStateSerializer$Type} from "packages/net/darkhax/botanypots/data/displaystate/$DisplayStateSerializer"
import {$ISerializer, $ISerializer$Type} from "packages/net/darkhax/bookshelf/api/serialization/$ISerializer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DisplayState {
static readonly "SERIALIZER": $ISerializer<($DisplayState)>

constructor()

public "getSerializer"(): $DisplayStateSerializer<(any)>
public static "getSerializer"(arg0: $ResourceLocation$Type): $ISerializer<(any)>
public static "init"(): void
get "serializer"(): $DisplayStateSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayState$Type = ($DisplayState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayState_ = $DisplayState$Type;
}}
declare module "packages/net/darkhax/botanypots/data/displaystate/$DisplayStateSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SimpleWeightedRandomList, $SimpleWeightedRandomList$Type} from "packages/net/minecraft/util/random/$SimpleWeightedRandomList"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$ISerializer, $ISerializer$Type} from "packages/net/darkhax/bookshelf/api/serialization/$ISerializer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DisplayState, $DisplayState$Type} from "packages/net/darkhax/botanypots/data/displaystate/$DisplayState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$Type} from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"

export interface $DisplayStateSerializer<T extends $DisplayState> extends $ISerializer<(T)> {

 "getId"(): $ResourceLocation
 "fromJSON"(arg0: $JsonObject$Type, arg1: string, arg2: $Supplier$Type<(T)>): T
 "fromJSON"(arg0: $JsonObject$Type, arg1: string, arg2: T): T
 "fromJSON"(arg0: $JsonObject$Type, arg1: string): T
 "fromJSON"(arg0: $JsonElement$Type): T
 "toJSON"(arg0: T): $JsonElement
 "toJSON"(arg0: $JsonObject$Type, arg1: string, arg2: T): void
 "fromByteBuf"(arg0: $FriendlyByteBuf$Type): T
 "toByteBuf"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "fromNBT"(arg0: $CompoundTag$Type, arg1: string, arg2: T): T
 "fromNBT"(arg0: $CompoundTag$Type, arg1: string): T
 "fromNBT"(arg0: $Tag$Type): T
 "toNBTList"(arg0: $CompoundTag$Type, arg1: string, arg2: $List$Type<(T)>): void
 "toNBTList"(arg0: $List$Type<(T)>): $ListTag
 "fromNBTList"(arg0: $Tag$Type): $List<(T)>
 "fromNBTList"(arg0: $CompoundTag$Type, arg1: string): $List<(T)>
 "fromJSONList"(arg0: $JsonObject$Type, arg1: string, arg2: $List$Type<(T)>): $List<(T)>
 "fromJSONList"(arg0: $JsonObject$Type, arg1: string, arg2: $Supplier$Type<($List$Type<(T)>)>): $List<(T)>
 "fromJSONList"(arg0: $JsonElement$Type): $List<(T)>
 "fromJSONList"(arg0: $JsonObject$Type, arg1: string): $List<(T)>
 "toJSONList"(arg0: $List$Type<(T)>): $JsonElement
 "toJSONList"(arg0: $JsonObject$Type, arg1: string, arg2: $List$Type<(T)>): void
 "fromByteBufList"(arg0: $FriendlyByteBuf$Type): $List<(T)>
 "toByteBufList"(arg0: $FriendlyByteBuf$Type, arg1: $List$Type<(T)>): void
 "fromJSONSet"(arg0: $JsonObject$Type, arg1: string, arg2: $Set$Type<(T)>): $Set<(T)>
 "fromJSONSet"(arg0: $JsonObject$Type, arg1: string): $Set<(T)>
 "fromJSONSet"(arg0: $JsonElement$Type): $Set<(T)>
 "fromJSONSet"(arg0: $JsonObject$Type, arg1: string, arg2: $Supplier$Type<($Set$Type<(T)>)>): $Set<(T)>
 "toJSONSet"(arg0: $Set$Type<(T)>): $JsonElement
 "readByteBufSet"(arg0: $FriendlyByteBuf$Type): $Set<(T)>
 "writeByteBufSet"(arg0: $FriendlyByteBuf$Type, arg1: $Set$Type<(T)>): void
 "fromJSONOptional"(arg0: $JsonObject$Type, arg1: string): $Optional<(T)>
 "fromJSONOptional"(arg0: $JsonElement$Type): $Optional<(T)>
 "toJSONOptional"(arg0: T): $JsonElement
 "toJSONOptional"(arg0: $JsonObject$Type, arg1: string, arg2: $Optional$Type<(T)>): void
 "toJSONOptional"(arg0: $Optional$Type<(T)>): $JsonElement
 "fromByteBufOptional"(arg0: $FriendlyByteBuf$Type): $Optional<(T)>
 "toByteBufOptional"(arg0: $FriendlyByteBuf$Type, arg1: $Optional$Type<(T)>): void
 "toJSONString"(arg0: T): string
 "fromJSONString"(arg0: string): T
 "fromJSONWeighted"(arg0: $JsonElement$Type): $WeightedEntry$Wrapper<(T)>
 "toJSONWeighted"(arg0: $WeightedEntry$Wrapper$Type<(T)>): $JsonElement
 "toByteBufWeighted"(arg0: $FriendlyByteBuf$Type, arg1: $WeightedEntry$Wrapper$Type<(T)>): void
 "fromByteBufWeighted"(arg0: $FriendlyByteBuf$Type): $WeightedEntry$Wrapper<(T)>
 "fromJSONWeightedList"(arg0: $JsonElement$Type): $SimpleWeightedRandomList<(T)>
 "toJSONWeightedList"(arg0: $SimpleWeightedRandomList$Type<(T)>): $JsonElement
 "fromByteBufWeightedList"(arg0: $FriendlyByteBuf$Type): $SimpleWeightedRandomList<(T)>
 "toByteBufWeightedList"(arg0: $FriendlyByteBuf$Type, arg1: $SimpleWeightedRandomList$Type<(T)>): void
 "fromJSONNullable"(arg0: $JsonElement$Type): T
 "fromJSONNullable"(arg0: $JsonObject$Type, arg1: string): T
 "toJSONNullable"(arg0: $JsonObject$Type, arg1: string, arg2: T): void
 "toJSONNullable"(arg0: T): $JsonElement
 "fromByteBufNullable"(arg0: $FriendlyByteBuf$Type): T
 "toByteBufNullable"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "toNBT"(arg0: T): $Tag
 "toNBT"(arg0: $CompoundTag$Type, arg1: string, arg2: T): void
}

export namespace $DisplayStateSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayStateSerializer$Type<T> = ($DisplayStateSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayStateSerializer_<T> = $DisplayStateSerializer$Type<(T)>;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/item/crafting/$AccessorShapedRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorShapedRecipe {

}

export namespace $AccessorShapedRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorShapedRecipe$Type = ($AccessorShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorShapedRecipe_ = $AccessorShapedRecipe$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/commands/args/$SingletonArgumentInfo$Template" {
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $SingletonArgumentInfo$Template<T extends $ArgumentType<(any)>> implements $ArgumentTypeInfo$Template<(T)> {

constructor(arg0: $Supplier$Type<(T)>, arg1: $ArgumentTypeInfo$Type<(T), (any)>)

public "instantiate"(arg0: $CommandBuildContext$Type): T
public "type"(): $ArgumentTypeInfo<(T), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonArgumentInfo$Template$Type<T> = ($SingletonArgumentInfo$Template<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonArgumentInfo$Template_<T> = $SingletonArgumentInfo$Template$Type<(T)>;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/fertilizer/$BasicFertilizer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityBotanyPot, $BlockEntityBotanyPot$Type} from "packages/net/darkhax/botanypots/block/$BlockEntityBotanyPot"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Fertilizer, $Fertilizer$Type} from "packages/net/darkhax/botanypots/data/recipes/fertilizer/$Fertilizer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BasicFertilizer extends $Fertilizer {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: integer, arg5: integer)

public "getIngredient"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(any)>
public "canApply"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockEntityBotanyPot$Type): boolean
public "getCropIngredient"(): $Ingredient
public "getSoilIngredient"(): $Ingredient
public "getMinTicks"(): integer
public "getMaxTicks"(): integer
public "apply"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockEntityBotanyPot$Type): void
get "ingredient"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "cropIngredient"(): $Ingredient
get "soilIngredient"(): $Ingredient
get "minTicks"(): integer
get "maxTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicFertilizer$Type = ($BasicFertilizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicFertilizer_ = $BasicFertilizer$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/item/$AccessorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $AccessorItem {

 "bookshelf$setCraftingRemainder"(arg0: $Item$Type): void

(arg0: $Item$Type): void
}

export namespace $AccessorItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorItem$Type = ($AccessorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorItem_ = $AccessorItem$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/client/multiplayer/$AccessorClientAdvancements" {
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"
import {$AdvancementProgress, $AdvancementProgress$Type} from "packages/net/minecraft/advancements/$AdvancementProgress"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorClientAdvancements {

 "bookshelf$getProgress"(): $Map<($Advancement), ($AdvancementProgress)>

(): $Map<($Advancement), ($AdvancementProgress)>
}

export namespace $AccessorClientAdvancements {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorClientAdvancements$Type = ($AccessorClientAdvancements);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorClientAdvancements_ = $AccessorClientAdvancements$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/entity/$AccessorEntity" {
import {$HoverEvent, $HoverEvent$Type} from "packages/net/minecraft/network/chat/$HoverEvent"

export interface $AccessorEntity {

 "bookshelf$createHoverEvent"(): $HoverEvent

(): $HoverEvent
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$Type = ($AccessorEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorEntity_ = $AccessorEntity$Type;
}}
declare module "packages/net/darkhax/botanypots/block/$BlockBotanyPot" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IBindRenderLayer, $IBindRenderLayer$Type} from "packages/net/darkhax/bookshelf/api/block/$IBindRenderLayer"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$InventoryBlock, $InventoryBlock$Type} from "packages/net/darkhax/bookshelf/api/block/$InventoryBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockBotanyPot extends $InventoryBlock implements $SimpleWaterloggedBlock, $IBindRenderLayer {
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

constructor(arg0: boolean)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "hasInventory"(): boolean
public "getRenderLayerToBind"(): $RenderType
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "renderLayerToBind"(): $RenderType
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBotanyPot$Type = ($BlockBotanyPot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBotanyPot_ = $BlockBotanyPot$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/crop/$BasicCropSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$BasicCrop, $BasicCrop$Type} from "packages/net/darkhax/botanypots/data/recipes/crop/$BasicCrop"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BasicCropSerializer implements $RecipeSerializer<($BasicCrop)> {
static "SERIALIZER": $BasicCropSerializer

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BasicCrop$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BasicCrop
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BasicCrop
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BasicCrop
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicCropSerializer$Type = ($BasicCropSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicCropSerializer_ = $BasicCropSerializer$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/serialization/$ISerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SimpleWeightedRandomList, $SimpleWeightedRandomList$Type} from "packages/net/minecraft/util/random/$SimpleWeightedRandomList"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$Type} from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"

export interface $ISerializer<T> {

 "fromJSON"(arg0: $JsonObject$Type, arg1: string, arg2: $Supplier$Type<(T)>): T
 "fromJSON"(arg0: $JsonObject$Type, arg1: string, arg2: T): T
 "fromJSON"(arg0: $JsonObject$Type, arg1: string): T
 "fromJSON"(arg0: $JsonElement$Type): T
 "toJSON"(arg0: T): $JsonElement
 "toJSON"(arg0: $JsonObject$Type, arg1: string, arg2: T): void
 "fromByteBuf"(arg0: $FriendlyByteBuf$Type): T
 "toByteBuf"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "fromNBT"(arg0: $CompoundTag$Type, arg1: string, arg2: T): T
 "fromNBT"(arg0: $CompoundTag$Type, arg1: string): T
 "fromNBT"(arg0: $Tag$Type): T
 "toNBTList"(arg0: $CompoundTag$Type, arg1: string, arg2: $List$Type<(T)>): void
 "toNBTList"(arg0: $List$Type<(T)>): $ListTag
 "fromNBTList"(arg0: $Tag$Type): $List<(T)>
 "fromNBTList"(arg0: $CompoundTag$Type, arg1: string): $List<(T)>
 "fromJSONList"(arg0: $JsonObject$Type, arg1: string, arg2: $List$Type<(T)>): $List<(T)>
 "fromJSONList"(arg0: $JsonObject$Type, arg1: string, arg2: $Supplier$Type<($List$Type<(T)>)>): $List<(T)>
 "fromJSONList"(arg0: $JsonElement$Type): $List<(T)>
 "fromJSONList"(arg0: $JsonObject$Type, arg1: string): $List<(T)>
 "toJSONList"(arg0: $List$Type<(T)>): $JsonElement
 "toJSONList"(arg0: $JsonObject$Type, arg1: string, arg2: $List$Type<(T)>): void
 "fromByteBufList"(arg0: $FriendlyByteBuf$Type): $List<(T)>
 "toByteBufList"(arg0: $FriendlyByteBuf$Type, arg1: $List$Type<(T)>): void
 "fromJSONSet"(arg0: $JsonObject$Type, arg1: string, arg2: $Set$Type<(T)>): $Set<(T)>
 "fromJSONSet"(arg0: $JsonObject$Type, arg1: string): $Set<(T)>
 "fromJSONSet"(arg0: $JsonElement$Type): $Set<(T)>
 "fromJSONSet"(arg0: $JsonObject$Type, arg1: string, arg2: $Supplier$Type<($Set$Type<(T)>)>): $Set<(T)>
 "toJSONSet"(arg0: $Set$Type<(T)>): $JsonElement
 "readByteBufSet"(arg0: $FriendlyByteBuf$Type): $Set<(T)>
 "writeByteBufSet"(arg0: $FriendlyByteBuf$Type, arg1: $Set$Type<(T)>): void
 "fromJSONOptional"(arg0: $JsonObject$Type, arg1: string): $Optional<(T)>
 "fromJSONOptional"(arg0: $JsonElement$Type): $Optional<(T)>
 "toJSONOptional"(arg0: T): $JsonElement
 "toJSONOptional"(arg0: $JsonObject$Type, arg1: string, arg2: $Optional$Type<(T)>): void
 "toJSONOptional"(arg0: $Optional$Type<(T)>): $JsonElement
 "fromByteBufOptional"(arg0: $FriendlyByteBuf$Type): $Optional<(T)>
 "toByteBufOptional"(arg0: $FriendlyByteBuf$Type, arg1: $Optional$Type<(T)>): void
 "toJSONString"(arg0: T): string
 "fromJSONString"(arg0: string): T
 "fromJSONWeighted"(arg0: $JsonElement$Type): $WeightedEntry$Wrapper<(T)>
 "toJSONWeighted"(arg0: $WeightedEntry$Wrapper$Type<(T)>): $JsonElement
 "toByteBufWeighted"(arg0: $FriendlyByteBuf$Type, arg1: $WeightedEntry$Wrapper$Type<(T)>): void
 "fromByteBufWeighted"(arg0: $FriendlyByteBuf$Type): $WeightedEntry$Wrapper<(T)>
 "fromJSONWeightedList"(arg0: $JsonElement$Type): $SimpleWeightedRandomList<(T)>
 "toJSONWeightedList"(arg0: $SimpleWeightedRandomList$Type<(T)>): $JsonElement
 "fromByteBufWeightedList"(arg0: $FriendlyByteBuf$Type): $SimpleWeightedRandomList<(T)>
 "toByteBufWeightedList"(arg0: $FriendlyByteBuf$Type, arg1: $SimpleWeightedRandomList$Type<(T)>): void
 "fromJSONNullable"(arg0: $JsonElement$Type): T
 "fromJSONNullable"(arg0: $JsonObject$Type, arg1: string): T
 "toJSONNullable"(arg0: $JsonObject$Type, arg1: string, arg2: T): void
 "toJSONNullable"(arg0: T): $JsonElement
 "fromByteBufNullable"(arg0: $FriendlyByteBuf$Type): T
 "toByteBufNullable"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "toNBT"(arg0: T): $Tag
 "toNBT"(arg0: $CompoundTag$Type, arg1: string, arg2: T): void
}

export namespace $ISerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISerializer$Type<T> = ($ISerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISerializer_<T> = $ISerializer$Type<(T)>;
}}
declare module "packages/net/darkhax/botanypots/block/$BlockEntityBotanyPot" {
import {$WorldlyInventoryBlockEntity, $WorldlyInventoryBlockEntity$Type} from "packages/net/darkhax/bookshelf/api/block/entity/$WorldlyInventoryBlockEntity"
import {$Crop, $Crop$Type} from "packages/net/darkhax/botanypots/data/recipes/crop/$Crop"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Soil, $Soil$Type} from "packages/net/darkhax/botanypots/data/recipes/soil/$Soil"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BotanyPotContainer, $BotanyPotContainer$Type} from "packages/net/darkhax/botanypots/block/inv/$BotanyPotContainer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$CachedSupplier, $CachedSupplier$Type} from "packages/net/darkhax/bookshelf/api/function/$CachedSupplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $BlockEntityBotanyPot extends $WorldlyInventoryBlockEntity<($BotanyPotContainer)> {
static readonly "POT_TYPE": $CachedSupplier<($BlockEntityType<($BlockEntityBotanyPot)>)>
 "lockKey": $LockCode
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addGrowth"(arg0: integer): void
public "areGrowthConditionsMet"(): boolean
public "getGrowthTime"(): integer
public "isHopper"(): boolean
public "getCrop"(): $Crop
public "resetGrowth"(): void
public static "tickPot"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockEntityBotanyPot$Type): void
public "getSoil"(): $Soil
public "isValidSeed"(arg0: $ItemStack$Type): boolean
public "refreshRandom"(): void
public "isGrowing"(): boolean
public "isCropHarvestable"(): boolean
public "isValidSoil"(arg0: $ItemStack$Type): boolean
public "attemptAutoHarvest"(): boolean
public "getLightLevel"(): integer
public "markDirty"(): void
public "getComparatorLevel"(): integer
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(): $CompoundTag
public "m_6555_"(arg0: integer, arg1: $Inventory$Type): $AbstractContainerMenu
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "growthTime"(): integer
get "hopper"(): boolean
get "crop"(): $Crop
get "soil"(): $Soil
get "growing"(): boolean
get "cropHarvestable"(): boolean
get "lightLevel"(): integer
get "comparatorLevel"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBotanyPot$Type = ($BlockEntityBotanyPot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityBotanyPot_ = $BlockEntityBotanyPot$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/soil/$BasicSoilSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$BasicSoil, $BasicSoil$Type} from "packages/net/darkhax/botanypots/data/recipes/soil/$BasicSoil"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BasicSoilSerializer implements $RecipeSerializer<($BasicSoil)> {
static "SERIALIZER": $BasicSoilSerializer

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BasicSoil$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BasicSoil
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BasicSoil
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BasicSoil
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicSoilSerializer$Type = ($BasicSoilSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicSoilSerializer_ = $BasicSoilSerializer$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/soil/$BasicSoil" {
import {$Crop, $Crop$Type} from "packages/net/darkhax/botanypots/data/recipes/crop/$Crop"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntityBotanyPot, $BlockEntityBotanyPot$Type} from "packages/net/darkhax/botanypots/block/$BlockEntityBotanyPot"
import {$DisplayState, $DisplayState$Type} from "packages/net/darkhax/botanypots/data/displaystate/$DisplayState"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Soil, $Soil$Type} from "packages/net/darkhax/botanypots/data/recipes/soil/$Soil"

export class $BasicSoil extends $Soil {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $DisplayState$Type, arg3: float, arg4: $Set$Type<(string)>, arg5: integer)

public "matchesLookup"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $ItemStack$Type): boolean
public "getDisplayState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): $DisplayState
public "getDisplayState"(): $DisplayState
public "getGrowthModifier"(): float
public "getGrowthModifier"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $Crop$Type): float
public "getLightLevel"(): integer
public "getLightLevel"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): integer
public "getIngredient"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(any)>
public "getCategories"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): $Set<(string)>
public "getCategories"(): $Set<(string)>
public "canGrowCrop"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $Crop$Type): boolean
get "displayState"(): $DisplayState
get "growthModifier"(): float
get "lightLevel"(): integer
get "ingredient"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "categories"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicSoil$Type = ($BasicSoil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicSoil_ = $BasicSoil$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/item/$AccessorItemCooldowns" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorItemCooldowns {

 "bookshelf$getCooldowns"(): $Map<($Item), (any)>
 "bookshelf$getTickCount"(): integer
}

export namespace $AccessorItemCooldowns {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorItemCooldowns$Type = ($AccessorItemCooldowns);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorItemCooldowns_ = $AccessorItemCooldowns$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/potinteraction/$PotInteraction" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityBotanyPot, $BlockEntityBotanyPot$Type} from "packages/net/darkhax/botanypots/block/$BlockEntityBotanyPot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RecipeBaseData, $RecipeBaseData$Type} from "packages/net/darkhax/bookshelf/api/data/recipes/$RecipeBaseData"

export class $PotInteraction extends $RecipeBaseData<($Container)> {

constructor(arg0: $ResourceLocation$Type)

public "canApply"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockEntityBotanyPot$Type): boolean
public "apply"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockEntityBotanyPot$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotInteraction$Type = ($PotInteraction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotInteraction_ = $PotInteraction$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/block/entity/$AccessorSignBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorSignBlockEntity {

 "bookshelf$markUpdated"(): void

(): void
}

export namespace $AccessorSignBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSignBlockEntity$Type = ($AccessorSignBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSignBlockEntity_ = $AccessorSignBlockEntity$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/client/$AccessorMinecraft" {
import {$FontManager, $FontManager$Type} from "packages/net/minecraft/client/gui/font/$FontManager"

export interface $AccessorMinecraft {

 "bookshelf$getFontManager"(): $FontManager

(): $FontManager
}

export namespace $AccessorMinecraft {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMinecraft$Type = ($AccessorMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMinecraft_ = $AccessorMinecraft$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/effect/$AccessorMobEffectInstance" {
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"

export interface $AccessorMobEffectInstance {

 "bookshelf$getHiddenEffect"(): $MobEffectInstance
 "bookshelf$setHiddenEffect"(arg0: $MobEffectInstance$Type): void
 "bookshelf$tickDownDuration"(): integer
 "setDuration"(arg0: integer): void
}

export namespace $AccessorMobEffectInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMobEffectInstance$Type = ($AccessorMobEffectInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMobEffectInstance_ = $AccessorMobEffectInstance$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/client/$AccessorFontManager" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FontSet, $FontSet$Type} from "packages/net/minecraft/client/gui/font/$FontSet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorFontManager {

 "bookshelf$getFonts"(): $Map<($ResourceLocation), ($FontSet)>

(): $Map<($ResourceLocation), ($FontSet)>
}

export namespace $AccessorFontManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorFontManager$Type = ($AccessorFontManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorFontManager_ = $AccessorFontManager$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/block/entity/$InventoryBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseContainerBlockEntity, $BaseContainerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $InventoryBlockEntity<T extends $Container> extends $BaseContainerBlockEntity {
 "lockKey": $LockCode
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "createInventory"(): T
public "readInventory"(arg0: $CompoundTag$Type): void
public "dropContents"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "saveInventory"(): $CompoundTag
public "markDirty"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getMaxStackSize"(): integer
public "stillValid"(arg0: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "countItem"(arg0: $Item$Type): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "getInventory"(): T
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "empty"(): boolean
get "maxStackSize"(): integer
get "inventory"(): T
get "containerSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryBlockEntity$Type<T> = ($InventoryBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryBlockEntity_<T> = $InventoryBlockEntity$Type<(T)>;
}}
declare module "packages/net/darkhax/bookshelf/api/function/$CachedSupplier" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CachedSupplier<T> implements $Supplier<(T)> {


public "ifCached"(arg0: $Consumer$Type<(T)>): void
public "invalidate"(): void
public "ifPresent"(arg0: $Consumer$Type<(T)>): void
public "isCached"(): boolean
public static "singleton"<T>(arg0: T): $CachedSupplier<(T)>
public "get"(): T
public static "cache"<T>(arg0: $Supplier$Type<(T)>): $CachedSupplier<(T)>
public "cast"<X>(): $CachedSupplier<(X)>
public "apply"(arg0: $Consumer$Type<(T)>): void
get "cached"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedSupplier$Type<T> = ($CachedSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedSupplier_<T> = $CachedSupplier$Type<(T)>;
}}
declare module "packages/net/darkhax/bookshelf/api/data/sound/$ISound" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISound {

 "playSoundAt"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type): void
 "playSoundAt"(arg0: $Level$Type, arg1: $Player$Type, arg2: $Entity$Type): void
 "playSoundAt"(arg0: $Level$Type, arg1: $Player$Type, arg2: double, arg3: double, arg4: double): void

(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type): void
}

export namespace $ISound {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISound$Type = ($ISound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISound_ = $ISound$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/data/recipes/$RecipeBaseData" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeBase, $RecipeBase$Type} from "packages/net/darkhax/bookshelf/api/data/recipes/$RecipeBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeBaseData<C extends $Container> extends $RecipeBase<(C)> {

constructor(arg0: $ResourceLocation$Type)

public "assemble"(arg0: C, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: C, arg1: $Level$Type): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBaseData$Type<C> = ($RecipeBaseData<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeBaseData_<C> = $RecipeBaseData$Type<(C)>;
}}
declare module "packages/net/darkhax/bookshelf/api/block/entity/$WorldlyInventoryBlockEntity" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$InventoryBlockEntity, $InventoryBlockEntity$Type} from "packages/net/darkhax/bookshelf/api/block/entity/$InventoryBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WorldlyInventoryBlockEntity<T extends $Container> extends $InventoryBlockEntity<(T)> implements $WorldlyContainer {
 "lockKey": $LockCode
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldlyInventoryBlockEntity$Type<T> = ($WorldlyInventoryBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldlyInventoryBlockEntity_<T> = $WorldlyInventoryBlockEntity$Type<(T)>;
}}
declare module "packages/net/darkhax/botanypots/block/inv/$BotanyPotContainer" {
import {$Crop, $Crop$Type} from "packages/net/darkhax/botanypots/data/recipes/crop/$Crop"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntityBotanyPot, $BlockEntityBotanyPot$Type} from "packages/net/darkhax/botanypots/block/$BlockEntityBotanyPot"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Soil, $Soil$Type} from "packages/net/darkhax/botanypots/data/recipes/soil/$Soil"

export class $BotanyPotContainer extends $SimpleContainer implements $WorldlyContainer {
static readonly "SOIL_SLOT": integer
static readonly "CROP_SLOT": integer
static readonly "STORAGE_SLOT": (integer)[]
static readonly "EMPTY_SLOTS": (integer)[]

constructor(arg0: $BlockEntityBotanyPot$Type)

public "getCrop"(): $Crop
public "getSoil"(): $Soil
public "getRequiredGrowthTime"(): integer
public "getPotEntity"(): $BlockEntityBotanyPot
public "stillValid"(arg0: $Player$Type): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "getSoilStack"(): $ItemStack
public "getCropStack"(): $ItemStack
public "setChanged"(): void
public "update"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "crop"(): $Crop
get "soil"(): $Soil
get "requiredGrowthTime"(): integer
get "potEntity"(): $BlockEntityBotanyPot
get "soilStack"(): $ItemStack
get "cropStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotanyPotContainer$Type = ($BotanyPotContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotanyPotContainer_ = $BotanyPotContainer$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/util/random/$AccessorWeightedRandomList" {
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"

export interface $AccessorWeightedRandomList<E> {

 "bookshelf$getTotalWeight"(): integer
 "bookshelf$getEntries"(): $ImmutableList<(E)>
}

export namespace $AccessorWeightedRandomList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorWeightedRandomList$Type<E> = ($AccessorWeightedRandomList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorWeightedRandomList_<E> = $AccessorWeightedRandomList$Type<(E)>;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/entity/$AccessorMob" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"

export interface $AccessorMob {

 "bookshelf$getAmbientSound"(): $SoundEvent

(): $SoundEvent
}

export namespace $AccessorMob {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMob$Type = ($AccessorMob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMob_ = $AccessorMob$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/crop/$BasicCrop" {
import {$Crop, $Crop$Type} from "packages/net/darkhax/botanypots/data/recipes/crop/$Crop"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Soil, $Soil$Type} from "packages/net/darkhax/botanypots/data/recipes/soil/$Soil"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntityBotanyPot, $BlockEntityBotanyPot$Type} from "packages/net/darkhax/botanypots/block/$BlockEntityBotanyPot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HarvestEntry, $HarvestEntry$Type} from "packages/net/darkhax/botanypots/data/recipes/crop/$HarvestEntry"
import {$DisplayState, $DisplayState$Type} from "packages/net/darkhax/botanypots/data/displaystate/$DisplayState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BasicCrop extends $Crop {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Set$Type<(string)>, arg3: integer, arg4: $List$Type<($HarvestEntry$Type)>, arg5: $List$Type<($DisplayState$Type)>, arg6: integer)

public "matchesLookup"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $ItemStack$Type): boolean
public "getResults"(): $List<($HarvestEntry)>
public "getDisplayState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): $List<($DisplayState)>
public "getLightLevel"(): integer
public "getLightLevel"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getCategories"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type): $Set<(string)>
public "getSoilCategories"(): $Set<(string)>
public "getDisplayStates"(): $List<($DisplayState)>
public "getGrowthTicks"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $Soil$Type): integer
public "getGrowthTicks"(): integer
public "canGrowInSoil"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockEntityBotanyPot$Type, arg3: $Soil$Type): boolean
public "generateDrops"(arg0: $Random$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockEntityBotanyPot$Type): $List<($ItemStack)>
public "getSeed"(): $Ingredient
get "results"(): $List<($HarvestEntry)>
get "lightLevel"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "soilCategories"(): $Set<(string)>
get "displayStates"(): $List<($DisplayState)>
get "growthTicks"(): integer
get "seed"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicCrop$Type = ($BasicCrop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicCrop_ = $BasicCrop$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/inventory/$AccessorCraftingMenu" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $AccessorCraftingMenu {

 "bookshelf$getPlayer"(): $Player

(): $Player
}

export namespace $AccessorCraftingMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCraftingMenu$Type = ($AccessorCraftingMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCraftingMenu_ = $AccessorCraftingMenu$Type;
}}
declare module "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapedDurabilityRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ShapedDurabilityRecipe$Serializer, $ShapedDurabilityRecipe$Serializer$Type} from "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapedDurabilityRecipe$Serializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedDurabilityRecipe extends $ShapedRecipe {
static readonly "SERIALIZER": $ShapedDurabilityRecipe$Serializer
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: integer)

public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedDurabilityRecipe$Type = ($ShapedDurabilityRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedDurabilityRecipe_ = $ShapedDurabilityRecipe$Type;
}}
declare module "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapelessDurabilityRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ShapelessDurabilityRecipe$Serializer, $ShapelessDurabilityRecipe$Serializer$Type} from "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapelessDurabilityRecipe$Serializer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapelessDurabilityRecipe extends $ShapelessRecipe {
static readonly "SERIALIZER": $ShapelessDurabilityRecipe$Serializer
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: $ItemStack$Type, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: integer)

public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessDurabilityRecipe$Type = ($ShapelessDurabilityRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessDurabilityRecipe_ = $ShapelessDurabilityRecipe$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/inventory/$AccessorInventoryMenu" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $AccessorInventoryMenu {

 "bookshelf$getOwner"(): $Player

(): $Player
}

export namespace $AccessorInventoryMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorInventoryMenu$Type = ($AccessorInventoryMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorInventoryMenu_ = $AccessorInventoryMenu$Type;
}}
declare module "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapelessDurabilityRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ShapelessDurabilityRecipe, $ShapelessDurabilityRecipe$Type} from "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapelessDurabilityRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessDurabilityRecipe$Serializer implements $RecipeSerializer<($ShapelessDurabilityRecipe)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessDurabilityRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessDurabilityRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessDurabilityRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessDurabilityRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessDurabilityRecipe$Serializer$Type = ($ShapelessDurabilityRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessDurabilityRecipe$Serializer_ = $ShapelessDurabilityRecipe$Serializer$Type;
}}
declare module "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapedDurabilityRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapedDurabilityRecipe, $ShapedDurabilityRecipe$Type} from "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapedDurabilityRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedDurabilityRecipe$Serializer implements $RecipeSerializer<($ShapedDurabilityRecipe)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedDurabilityRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedDurabilityRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedDurabilityRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedDurabilityRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedDurabilityRecipe$Serializer$Type = ($ShapedDurabilityRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedDurabilityRecipe$Serializer_ = $ShapedDurabilityRecipe$Serializer$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/block/$IBindRenderLayer" {
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $IBindRenderLayer {

 "getRenderLayerToBind"(): $RenderType

(): $RenderType
}

export namespace $IBindRenderLayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBindRenderLayer$Type = ($IBindRenderLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBindRenderLayer_ = $IBindRenderLayer$Type;
}}
declare module "packages/net/darkhax/attributefix/mixin/$AccessorRangedAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorRangedAttribute {

 "attributefix$setMinValue"(arg0: double): void
 "attributefix$setMaxValue"(arg0: double): void
}

export namespace $AccessorRangedAttribute {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorRangedAttribute$Type = ($AccessorRangedAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorRangedAttribute_ = $AccessorRangedAttribute$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/fertilizer/$Fertilizer" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityBotanyPot, $BlockEntityBotanyPot$Type} from "packages/net/darkhax/botanypots/block/$BlockEntityBotanyPot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RecipeBaseData, $RecipeBaseData$Type} from "packages/net/darkhax/bookshelf/api/data/recipes/$RecipeBaseData"

export class $Fertilizer extends $RecipeBaseData<($Container)> {

constructor(arg0: $ResourceLocation$Type)

public "canApply"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockEntityBotanyPot$Type): boolean
public "apply"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockEntityBotanyPot$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fertilizer$Type = ($Fertilizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Fertilizer_ = $Fertilizer$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/world/$AccessorRecipeManager" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorRecipeManager {

 "bookshelf$getTypeMap"(arg0: $RecipeType$Type<(any)>): $Map<(any), (any)>

(arg0: $RecipeType$Type<(any)>): $Map<(any), (any)>
}

export namespace $AccessorRecipeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorRecipeManager$Type = ($AccessorRecipeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorRecipeManager_ = $AccessorRecipeManager$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/potinteraction/$BasicPotInteractionSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BasicPotInteraction, $BasicPotInteraction$Type} from "packages/net/darkhax/botanypots/data/recipes/potinteraction/$BasicPotInteraction"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BasicPotInteractionSerializer implements $RecipeSerializer<($BasicPotInteraction)> {
static readonly "SERIALIZER": $RecipeSerializer<(any)>

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BasicPotInteraction$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BasicPotInteraction
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BasicPotInteraction
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BasicPotInteraction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicPotInteractionSerializer$Type = ($BasicPotInteractionSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicPotInteractionSerializer_ = $BasicPotInteractionSerializer$Type;
}}
declare module "packages/net/darkhax/botanypots/data/recipes/potinteraction/$BasicPotInteraction" {
import {$Sound, $Sound$Type} from "packages/net/darkhax/bookshelf/api/data/sound/$Sound"
import {$PotInteraction, $PotInteraction$Type} from "packages/net/darkhax/botanypots/data/recipes/potinteraction/$PotInteraction"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityBotanyPot, $BlockEntityBotanyPot$Type} from "packages/net/darkhax/botanypots/block/$BlockEntityBotanyPot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BasicPotInteraction extends $PotInteraction {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: boolean, arg3: $Ingredient$Type, arg4: $Ingredient$Type, arg5: $ItemStack$Type, arg6: $ItemStack$Type, arg7: $Sound$Type, arg8: $List$Type<($ItemStack$Type)>)

public "getSerializer"(): $RecipeSerializer<(any)>
public "canApply"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockEntityBotanyPot$Type): boolean
public "getHeldTest"(): $Ingredient
public "isDamageHeld"(): boolean
public "getSoilTest"(): $Ingredient
public "getSeedTest"(): $Ingredient
public "getNewSoilStack"(): $ItemStack
public "getNewSeedStack"(): $ItemStack
public "getExtraDrops"(): $List<($ItemStack)>
public "getSound"(): $Sound
public "apply"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockEntityBotanyPot$Type): void
get "serializer"(): $RecipeSerializer<(any)>
get "heldTest"(): $Ingredient
get "damageHeld"(): boolean
get "soilTest"(): $Ingredient
get "seedTest"(): $Ingredient
get "newSoilStack"(): $ItemStack
get "newSeedStack"(): $ItemStack
get "extraDrops"(): $List<($ItemStack)>
get "sound"(): $Sound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicPotInteraction$Type = ($BasicPotInteraction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicPotInteraction_ = $BasicPotInteraction$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/commands/args/$SingletonArgumentInfo" {
import {$SingletonArgumentInfo$Template, $SingletonArgumentInfo$Template$Type} from "packages/net/darkhax/bookshelf/api/commands/args/$SingletonArgumentInfo$Template"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"

export class $SingletonArgumentInfo<T extends $ArgumentType<(any)>> implements $ArgumentTypeInfo<(T), ($SingletonArgumentInfo$Template<(T)>)> {


public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $SingletonArgumentInfo$Template<(T)>
public "serializeToNetwork"(arg0: $SingletonArgumentInfo$Template$Type<(T)>, arg1: $FriendlyByteBuf$Type): void
public "serializeToJson"(arg0: $SingletonArgumentInfo$Template$Type<(T)>, arg1: $JsonObject$Type): void
public "unpack"(arg0: T): $SingletonArgumentInfo$Template<(T)>
public static "of"<T extends $ArgumentType<(any)>>(arg0: T): $SingletonArgumentInfo<(T)>
public static "of"<T extends $ArgumentType<(any)>>(arg0: $Supplier$Type<(T)>): $SingletonArgumentInfo<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonArgumentInfo$Type<T> = ($SingletonArgumentInfo<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonArgumentInfo_<T> = $SingletonArgumentInfo$Type<(T)>;
}}
