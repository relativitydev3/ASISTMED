/**
 * Web3Forms — la access key es pública por diseño (restringe por dominio en su panel).
 * En Vercel: Settings → Environment Variables → WEB3FORMS_ACCESS_KEY → Redeploy
 */
const DEFAULT_ACCESS_KEY = 'bfd1f268-385a-45ed-be74-60f176c7a3b3';

module.exports = {
  accessKey:
    process.env.WEB3FORMS_ACCESS_KEY ||
    process.env.WEB3FORMS_KEY ||
    DEFAULT_ACCESS_KEY,
};
