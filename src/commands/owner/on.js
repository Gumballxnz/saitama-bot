import { PREFIX } from "../../config.js";
import { WarningError } from "../../errors/index.js";
import { activateGroup } from "../../utils/database.js";

export default {
  name: "on",
  description: "Ativa o bot no grupo",
  commands: ["on"],
  usage: `${PREFIX}on`,
  /**
   * @param {CommandHandleProps} props
   */
  handle: async ({ sendSuccessReply, remoteJid, isGroup, userLid }) => {
    if (!isGroup) {
      throw new WarningError("Este comando deve ser usado dentro de um grupo.");
    }

    // Import dynamically to avoid circular dependency if needed, 
    // or assume isBotOwner is available via previous imports (need to add import)
    // Actually, on.js imports are: PREFIX, WarningError, activateGroup.
    // I need to import isBotOwner or checkPermission? 
    // Let's use isBotOwner from middlewares.

    // Wait, I need to add the import first.

    activateGroup(remoteJid);
    await sendSuccessReply("Bot ativado no grupo!");
  },
};
