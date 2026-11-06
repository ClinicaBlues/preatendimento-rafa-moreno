/* ============================================================================
   DR. RAFAEL MORENO — PRÉ-CONSULTA ONLINE · arquivo de configuração
   ----------------------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser editado no dia a dia.
   Altere apenas o que está entre aspas.
   ========================================================================== */

window.PRE_CONFIG = {

  // URL do robô (Google Apps Script) que recebe a ficha e manda o resumo
  // por e-mail. Enquanto estiver vazio, a ficha é enviada pelo próprio
  // paciente para o WhatsApp da clínica (whatsappEnvio), em texto.
  endpointUrl: "",

  // Senha simples entre o site e o robô (igual à WRITE_KEY do Code.gs).
  writeKey: "rafael-pre-2026",

  doctorName: "Dr. Rafael Moreno",
  doctorShort: "Dr. Rafael",
  crm: "CRM-MG 91439 · RQE 70774",
  tagline: "Ortopedia e Traumatologia · Tratamento da dor",
  address: "Clínica Blues · R. Padre Marinho, 165 · Santa Efigênia · Belo Horizonte / MG",
  online: "Atendimento em BH e, sob consulta, em Santa Luzia, Juiz de Fora e Itaúna",

  // Fotos (arquivos da pasta img/). Se não existirem, o site mostra as iniciais.
  photoRound: "img/perfil.jpg",
  photoHero:  "img/hero.jpg",

  // WhatsApp da clínica (só dígitos: 55 + DDD + número)
  supportWhatsapp: "5531995979065",
  // Para onde a ficha vai quando não há robô configurado
  whatsappEnvio: "5531995979065",

  siteUrl: "https://rafaelmoreno.clinicablues.com.br/",

  // Link da política de privacidade (LGPD). Deixe "" se não houver.
  privacyUrl: ""
};
