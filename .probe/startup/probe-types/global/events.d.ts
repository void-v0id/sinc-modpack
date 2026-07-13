import {$AttachmentDataLoadEvent, $AttachmentDataLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/asset/$AttachmentDataLoadEvent"
import {$RecipeLoadBeginEvent, $RecipeLoadBeginEvent$Type} from "packages/dev/aika/taczjs/forge/events/crafting/legacy/$RecipeLoadBeginEvent"
import {$AttachmentIndexLoadEvent, $AttachmentIndexLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/index/$AttachmentIndexLoadEvent"
import {$GunIndexLoadEvent, $GunIndexLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/index/$GunIndexLoadEvent"
import {$RecipeLoadEndEvent, $RecipeLoadEndEvent$Type} from "packages/dev/aika/taczjs/forge/events/crafting/legacy/$RecipeLoadEndEvent"
import {$ClientInitEventJS, $ClientInitEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/$ClientInitEventJS"
import {$ItemModelPropertiesEventJS, $ItemModelPropertiesEventJS$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemModelPropertiesEventJS"
import {$WailaCommonRegistrationEventJS, $WailaCommonRegistrationEventJS$Type} from "packages/pie/ilikepiefoo/compat/jade/$WailaCommonRegistrationEventJS"
import {$AddWorldgenEventJS, $AddWorldgenEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/gen/$AddWorldgenEventJS"
import {$GunDataLoadEvent, $GunDataLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/asset/$GunDataLoadEvent"
import {$CreativeTabEvent, $CreativeTabEvent$Type} from "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabEvent"
import {$ItemModificationEventJS, $ItemModificationEventJS$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemModificationEventJS"
import {$RegistryEventJS, $RegistryEventJS$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryEventJS"
import {$AmmoIndexLoadEvent, $AmmoIndexLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/index/$AmmoIndexLoadEvent"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$BlockModificationEventJS, $BlockModificationEventJS$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockModificationEventJS"
import {$ItemArmorTierRegistryEventJS, $ItemArmorTierRegistryEventJS$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$ItemArmorTierRegistryEventJS"
import {$ArchEventRegisterEventJS, $ArchEventRegisterEventJS$Type} from "packages/pie/ilikepiefoo/events/custom/$ArchEventRegisterEventJS"
import {$AttachmentTagsLoadEvent, $AttachmentTagsLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/asset/$AttachmentTagsLoadEvent"
import {$ProxyEventJS, $ProxyEventJS$Type} from "packages/pie/ilikepiefoo/events/$ProxyEventJS"
import {$RecipeSchemaRegistryEventJS, $RecipeSchemaRegistryEventJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeSchemaRegistryEventJS"
import {$RecipeLoadEvent, $RecipeLoadEvent$Type} from "packages/dev/aika/taczjs/forge/events/crafting/legacy/$RecipeLoadEvent"
import {$RemoveWorldgenEventJS, $RemoveWorldgenEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/gen/$RemoveWorldgenEventJS"
import {$ItemToolTierRegistryEventJS, $ItemToolTierRegistryEventJS$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$ItemToolTierRegistryEventJS"

declare global {
export namespace TaCZStartupEvents {
function attachmentDataLoad(handler: (event: $AttachmentDataLoadEvent) => void): void
function attachmentIndexLoad(handler: (event: $AttachmentIndexLoadEvent) => void): void
function gunIndexLoad(handler: (event: $GunIndexLoadEvent) => void): void
function gunDataLoad(handler: (event: $GunDataLoadEvent) => void): void
function attachmentTagsLoad(handler: (event: $AttachmentTagsLoadEvent) => void): void
function ammoIndexLoad(handler: (event: $AmmoIndexLoadEvent) => void): void
function recipeLoadEnd(handler: (event: $RecipeLoadEndEvent) => void): void
function recipeLoadBegin(handler: (event: $RecipeLoadBeginEvent) => void): void
function recipeLoad(handler: (event: $RecipeLoadEvent) => void): void
}
export namespace WorldgenEvents {
function add(handler: (event: $AddWorldgenEventJS) => void): void
function remove(handler: (event: $RemoveWorldgenEventJS) => void): void
}
export namespace ArchEvents {
function registry(handler: (event: $ArchEventRegisterEventJS) => void): void
function handleStartup(extra: string, handler: (event: $ProxyEventJS) => void): void
}
export namespace JadeEvents {
function onCommonRegistration(handler: (event: $WailaCommonRegistrationEventJS) => void): void
}
export namespace ItemEvents {
function modelProperties(handler: (event: $ItemModelPropertiesEventJS) => void): void
function modification(handler: (event: $ItemModificationEventJS) => void): void
function toolTierRegistry(handler: (event: $ItemToolTierRegistryEventJS) => void): void
function armorTierRegistry(handler: (event: $ItemArmorTierRegistryEventJS) => void): void
}
export namespace ClientEvents {
function init(handler: (event: $ClientInitEventJS) => void): void
}
export namespace StartupEvents {
function init(handler: (event: $StartupEventJS) => void): void
function registry(extra: string, handler: (event: $RegistryEventJS<(any)>) => void): void
function modifyCreativeTab(extra: string, handler: (event: $CreativeTabEvent) => void): void
function recipeSchemaRegistry(handler: (event: $RecipeSchemaRegistryEventJS) => void): void
function postInit(handler: (event: $StartupEventJS) => void): void
}
export namespace BlockEvents {
function modification(handler: (event: $BlockModificationEventJS) => void): void
}
}