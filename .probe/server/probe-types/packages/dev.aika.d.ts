declare module "packages/dev/aika/taczjs/forge/events/crafting/legacy/$RecipeLoadBeginEvent" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeLoadBeginEvent extends $EventJS {

constructor()

public "removeAllRecipes"(): void
public "putRecipe"(id: $ResourceLocation$Type, json: string): void
/**
 * @deprecated This is an alias for `event.putRecipe`. Please use `event.putRecipe` instead.
 */
public "addRecipe"(id: $ResourceLocation$Type, json: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeLoadBeginEvent$Type = ($RecipeLoadBeginEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeLoadBeginEvent_ = $RecipeLoadBeginEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/client/$LocalPlayerShootEvent" {
import {$AbstractClientGunEvent, $AbstractClientGunEvent$Type} from "packages/dev/aika/taczjs/forge/events/client/$AbstractClientGunEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $LocalPlayerShootEvent extends $AbstractClientGunEvent {

constructor(gunId: $ResourceLocation$Type)

public "cancelShoot"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerShootEvent$Type = ($LocalPlayerShootEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalPlayerShootEvent_ = $LocalPlayerShootEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/$AbstractAssetLoadEvent" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractIndexLoadEvent, $AbstractIndexLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/$AbstractIndexLoadEvent"

export class $AbstractAssetLoadEvent extends $AbstractIndexLoadEvent {

constructor(id: $ResourceLocation$Type, json: $JsonElement$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssetLoadEvent$Type = ($AbstractAssetLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAssetLoadEvent_ = $AbstractAssetLoadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/shooter/$LivingEntityReloadEvent" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractShooterEvent, $AbstractShooterEvent$Type} from "packages/dev/aika/taczjs/forge/events/shooter/$AbstractShooterEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEntityReloadEvent extends $AbstractShooterEvent {

constructor(entity: $LivingEntity$Type, gunItem: $ItemStack$Type)

public "cancelReload"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityReloadEvent$Type = ($LivingEntityReloadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityReloadEvent_ = $LivingEntityReloadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/client/$AbstractClientGunEvent" {
import {$IClientPlayerGunOperator, $IClientPlayerGunOperator$Type} from "packages/com/tacz/guns/api/client/gameplay/$IClientPlayerGunOperator"
import {$EntityHitResult, $EntityHitResult$Type} from "packages/net/minecraft/world/phys/$EntityHitResult"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ClientEventJS, $ClientEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/$ClientEventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ClientGunIndex, $ClientGunIndex$Type} from "packages/com/tacz/guns/client/resource/index/$ClientGunIndex"

export class $AbstractClientGunEvent extends $ClientEventJS {


public "setVanillaInteract"(v: boolean): void
public "getGunId"(): $ResourceLocation
public "getGunIndex"(): $ClientGunIndex
public "isVanillaInteract"(): boolean
public "getGunOperator"(): $IClientPlayerGunOperator
public "getBlockHitResult"(): $BlockHitResult
public "getEntityHitResult"(): $EntityHitResult
public "canInteractEntity"(): boolean
set "vanillaInteract"(value: boolean)
get "gunId"(): $ResourceLocation
get "gunIndex"(): $ClientGunIndex
get "vanillaInteract"(): boolean
get "gunOperator"(): $IClientPlayerGunOperator
get "blockHitResult"(): $BlockHitResult
get "entityHitResult"(): $EntityHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientGunEvent$Type = ($AbstractClientGunEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractClientGunEvent_ = $AbstractClientGunEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/crafting/legacy/$RecipeLoadEndEvent" {
import {$RecipeLoadBeginEvent, $RecipeLoadBeginEvent$Type} from "packages/dev/aika/taczjs/forge/events/crafting/legacy/$RecipeLoadBeginEvent"

export class $RecipeLoadEndEvent extends $RecipeLoadBeginEvent {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeLoadEndEvent$Type = ($RecipeLoadEndEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeLoadEndEvent_ = $RecipeLoadEndEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/shooter/$LivingEntityAimEvent" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractShooterEvent, $AbstractShooterEvent$Type} from "packages/dev/aika/taczjs/forge/events/shooter/$AbstractShooterEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEntityAimEvent extends $AbstractShooterEvent {

constructor(entity: $LivingEntity$Type, gunItem: $ItemStack$Type)

public "cancelAim"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAimEvent$Type = ($LivingEntityAimEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAimEvent_ = $LivingEntityAimEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/$TaCZJSUtils" {
import {$CommonGunIndex, $CommonGunIndex$Type} from "packages/com/tacz/guns/resource/index/$CommonGunIndex"
import {$CommonAmmoIndex, $CommonAmmoIndex$Type} from "packages/com/tacz/guns/resource/index/$CommonAmmoIndex"
import {$GunDisplayInstance, $GunDisplayInstance$Type} from "packages/com/tacz/guns/client/resource/$GunDisplayInstance"
import {$CommonAttachmentIndex, $CommonAttachmentIndex$Type} from "packages/com/tacz/guns/resource/index/$CommonAttachmentIndex"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TaCZJSUtils {

constructor()

public static "mainHandHoldGun"(livingEntity: $LivingEntity$Type): boolean
public static "getAmmoIndex"(ammoId: $ResourceLocation$Type): $CommonAmmoIndex
public static "getAttachmentIndex"(attachmentId: $ResourceLocation$Type): $CommonAttachmentIndex
public static "openRefitScreen"(): void
public static "getGunIndex"(gunId: $ResourceLocation$Type): $CommonGunIndex
public static "getGunDisplay"(): $GunDisplayInstance
get "gunDisplay"(): $GunDisplayInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaCZJSUtils$Type = ($TaCZJSUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaCZJSUtils_ = $TaCZJSUtils$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/$AbstractIndexLoadEvent" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractIndexLoadEvent extends $EventJS {

constructor(id: $ResourceLocation$Type, json: $JsonElement$Type)

public "getStdJson"(): string
public "setJson"(json: string): void
public "getJson"(): string
public "getId"(): $ResourceLocation
get "stdJson"(): string
set "json"(value: string)
get "json"(): string
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractIndexLoadEvent$Type = ($AbstractIndexLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractIndexLoadEvent_ = $AbstractIndexLoadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/crafting/$AbstractRecipeEvent" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractRecipeEvent extends $EventJS {

constructor(recipeId: $ResourceLocation$Type)

public "getRecipeId"(): $ResourceLocation
public "getId"(): $ResourceLocation
get "recipeId"(): $ResourceLocation
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRecipeEvent$Type = ($AbstractRecipeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRecipeEvent_ = $AbstractRecipeEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/crafting/legacy/$RecipeLoadEvent" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TableRecipe, $TableRecipe$Type} from "packages/com/tacz/guns/resource/pojo/data/recipe/$TableRecipe"
import {$AbstractRecipeEvent, $AbstractRecipeEvent$Type} from "packages/dev/aika/taczjs/forge/events/crafting/$AbstractRecipeEvent"

export class $RecipeLoadEvent extends $AbstractRecipeEvent {

constructor(recipeId: $ResourceLocation$Type, json: string)

/**
 * @deprecated deprecated
 * Get the JSON data in standard format.
 */
public "getStdJson"(): string
public "setJson"(json: string): void
public "getTableRecipe"(): $TableRecipe
public "removeRecipe"(): void
/**
 * @deprecated deprecated
 * The returned data may not conform to standard JSON format.
 */
public "getJson"(): string
get "stdJson"(): string
set "json"(value: string)
get "tableRecipe"(): $TableRecipe
get "json"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeLoadEvent$Type = ($RecipeLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeLoadEvent_ = $RecipeLoadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/client/$LocalPlayerMeleeEvent" {
import {$AbstractClientGunEvent, $AbstractClientGunEvent$Type} from "packages/dev/aika/taczjs/forge/events/client/$AbstractClientGunEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $LocalPlayerMeleeEvent extends $AbstractClientGunEvent {

constructor(gunId: $ResourceLocation$Type)

public "cancelMelee"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerMeleeEvent$Type = ($LocalPlayerMeleeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalPlayerMeleeEvent_ = $LocalPlayerMeleeEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/shooter/$LivingEntityShootEvent" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractShooterEvent, $AbstractShooterEvent$Type} from "packages/dev/aika/taczjs/forge/events/shooter/$AbstractShooterEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEntityShootEvent extends $AbstractShooterEvent {

constructor(entity: $LivingEntity$Type, gunItem: $ItemStack$Type)

public "cancelShoot"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityShootEvent$Type = ($LivingEntityShootEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityShootEvent_ = $LivingEntityShootEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/client/$ClientGunIndexLoadEvent" {
import {$AbstractClientGunEvent, $AbstractClientGunEvent$Type} from "packages/dev/aika/taczjs/forge/events/client/$AbstractClientGunEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientGunIndexLoadEvent extends $AbstractClientGunEvent {

constructor(gunId: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientGunIndexLoadEvent$Type = ($ClientGunIndexLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientGunIndexLoadEvent_ = $ClientGunIndexLoadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/client/$LocalPlayerReloadEvent" {
import {$AbstractClientGunEvent, $AbstractClientGunEvent$Type} from "packages/dev/aika/taczjs/forge/events/client/$AbstractClientGunEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $LocalPlayerReloadEvent extends $AbstractClientGunEvent {

constructor(gunId: $ResourceLocation$Type)

public "cancelReload"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerReloadEvent$Type = ($LocalPlayerReloadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalPlayerReloadEvent_ = $LocalPlayerReloadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/index/$AttachmentIndexLoadEvent" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractIndexLoadEvent, $AbstractIndexLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/$AbstractIndexLoadEvent"

export class $AttachmentIndexLoadEvent extends $AbstractIndexLoadEvent {

constructor(id: $ResourceLocation$Type, json: $JsonElement$Type)

public "removeAttachment"(): void
public "getPOJO"(): any
get "pOJO"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentIndexLoadEvent$Type = ($AttachmentIndexLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentIndexLoadEvent_ = $AttachmentIndexLoadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/shooter/$LivingEntityMeleeEvent" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractShooterEvent, $AbstractShooterEvent$Type} from "packages/dev/aika/taczjs/forge/events/shooter/$AbstractShooterEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEntityMeleeEvent extends $AbstractShooterEvent {

constructor(entity: $LivingEntity$Type, gunItem: $ItemStack$Type)

public "cancelMelee"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityMeleeEvent$Type = ($LivingEntityMeleeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityMeleeEvent_ = $LivingEntityMeleeEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/asset/$GunDataLoadEvent" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$AbstractAssetLoadEvent, $AbstractAssetLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/$AbstractAssetLoadEvent"
import {$GunData, $GunData$Type} from "packages/com/tacz/guns/resource/pojo/data/gun/$GunData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GunDataLoadEvent extends $AbstractAssetLoadEvent {

constructor(id: $ResourceLocation$Type, json: $JsonElement$Type)

public "getGunData"(): $GunData
public "removeGunData"(): void
get "gunData"(): $GunData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunDataLoadEvent$Type = ($GunDataLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunDataLoadEvent_ = $GunDataLoadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/shooter/$AbstractShooterEvent" {
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AbstractShooterEvent extends $LivingEntityEventJS {

constructor(entity: $LivingEntity$Type, gunItem: $ItemStack$Type)

public "getGunItem"(): $ItemStack
public "getShooter"(): $LivingEntity
public "getGunId"(): $ResourceLocation
get "gunItem"(): $ItemStack
get "shooter"(): $LivingEntity
get "gunId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShooterEvent$Type = ($AbstractShooterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShooterEvent_ = $AbstractShooterEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/asset/$AttachmentDataLoadEvent" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$AbstractAssetLoadEvent, $AbstractAssetLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/$AbstractAssetLoadEvent"
import {$AttachmentData, $AttachmentData$Type} from "packages/com/tacz/guns/resource/pojo/data/attachment/$AttachmentData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AttachmentDataLoadEvent extends $AbstractAssetLoadEvent {

constructor(id: $ResourceLocation$Type, json: $JsonElement$Type)

public "getAttachmentData"(): $AttachmentData
public "removeAttachmentData"(): void
get "attachmentData"(): $AttachmentData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentDataLoadEvent$Type = ($AttachmentDataLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentDataLoadEvent_ = $AttachmentDataLoadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/interfaces/client/$IClientGun" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IClientGun {

 "setVanillaInteract"(arg0: boolean): void
 "isVanillaInteract"(): boolean
}

export namespace $IClientGun {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientGun$Type = ($IClientGun);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientGun_ = $IClientGun$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/client/$LocalPlayerAimEvent" {
import {$AbstractClientGunEvent, $AbstractClientGunEvent$Type} from "packages/dev/aika/taczjs/forge/events/client/$AbstractClientGunEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $LocalPlayerAimEvent extends $AbstractClientGunEvent {

constructor(isAim: boolean, gunId: $ResourceLocation$Type)

public "cancelAim"(): void
public "isAim"(): boolean
get "aim"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerAimEvent$Type = ($LocalPlayerAimEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalPlayerAimEvent_ = $LocalPlayerAimEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/index/$GunIndexLoadEvent" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractIndexLoadEvent, $AbstractIndexLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/$AbstractIndexLoadEvent"

export class $GunIndexLoadEvent extends $AbstractIndexLoadEvent {

constructor(id: $ResourceLocation$Type, json: $JsonElement$Type)

public "getPOJO"(): any
public "removeGun"(): void
get "pOJO"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunIndexLoadEvent$Type = ($GunIndexLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunIndexLoadEvent_ = $GunIndexLoadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/index/$AmmoIndexLoadEvent" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractIndexLoadEvent, $AbstractIndexLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/$AbstractIndexLoadEvent"

export class $AmmoIndexLoadEvent extends $AbstractIndexLoadEvent {

constructor(id: $ResourceLocation$Type, json: $JsonElement$Type)

public "getPOJO"(): any
public "removeAmmo"(): void
get "pOJO"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoIndexLoadEvent$Type = ($AmmoIndexLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoIndexLoadEvent_ = $AmmoIndexLoadEvent$Type;
}}
declare module "packages/dev/aika/taczjs/forge/events/asset/$AttachmentTagsLoadEvent" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractIndexLoadEvent, $AbstractIndexLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/$AbstractIndexLoadEvent"

export class $AttachmentTagsLoadEvent extends $AbstractIndexLoadEvent {

constructor(resourceId: $ResourceLocation$Type, json: $JsonElement$Type)

public "getAttachmentTags"(): (string)[]
public "removeAttachmentTags"(): void
get "attachmentTags"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentTagsLoadEvent$Type = ($AttachmentTagsLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentTagsLoadEvent_ = $AttachmentTagsLoadEvent$Type;
}}
