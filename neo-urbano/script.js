// ===== DADOS DO SISTEMA =====
const dadosSistema = {
    origens: [
        { nome: "Cidadão Integrado", descricao: "Você sempre esteve dentro do sistema. Conhece as regras, mas será que elas ainda servem para você?" },
        { nome: "Cidadão em Transição", descricao: "Saindo da zona de conforto ou caindo na real? A cidade não perdoa quem fica no meio do caminho." },
        { nome: "Excluído do Sistema", descricao: "Seu nome não consta em lugar nenhum. Você é um fantasma, e isso tem suas vantagens." },
        { nome: "Nascido no Subúrbio", descricao: "Cresceu longe do centro, onde as corporações ainda não chegaram com força total." },
        { nome: "Refugiado Urbano", descricao: "Veio de fora, fugindo de algo pior. A cidade é sua nova prisão, mas também sua chance." },
        { nome: "Desempregado Crônico", descricao: "O sistema não tem lugar para você. Sobreviver é sua única habilidade." },
        { nome: "Trabalhador Essencial", descricao: "Mantém a cidade funcionando, mas ninguém nota seu trabalho. Até agora." },
        { nome: "Criança do Sistema", descricao: "Órfão criado por instituições estatais ou corporativas. Você conhece os corredores que ninguém vê." },
        { nome: "Herdeiro de Dívidas", descricao: "Nasceu devendo. Cada respiro seu custa créditos. A liberdade tem preço." },
        { nome: "Ex-Funcionário Corporativo", descricao: "Já esteve do lado de dentro. Sabe como eles pensam, e isso é perigoso." },
        { nome: "Vítima de Reintegração Forçada", descricao: "Te tentaram 'consertar'. Sobrou apenas cicatrizes e ódio." },
        { nome: "Filho da Zona Cinza", descricao: "Cresceu na fronteira entre o legal e o ilegal. As linhas borradas são seu lar." },
        { nome: "Sobrevivente de Ocupação", descricao: "Viu seu bairro ser tomado por gangues ou corporações. Sobreviveu para contar." },
        { nome: "Morador de Área de Sacrifício", descricao: "Vive onde ninguém mais quer. A poluição fez parte do seu café da manhã." },
        { nome: "Fantasma Administrativo", descricao: "Existe apenas nos bancos de dados obsoletos. Pode ser um erro do sistema ou uma jogada genial." }
    ],

    classes: [
        { 
            nome: "Sobrevivente", 
            icone: "fa-skull-crossbones",
            descricao: "Especialista em permanecer vivo quando todos os outros morrem.",
            atributoChave: "Carne"
        },
        { 
            nome: "Mercenário", 
            icone: "fa-user-secret",
            descricao: "Vende habilidades por créditos. Lealdade tem preço.",
            atributoChave: "Manha"
        },
        {
            nome: "Motorista",
            icone: "fa-car",
            descricao: "Conhece cada beco, atalho e rota de fuga da cidade.",
            atributoChave: "Foco"
        },
        { 
            nome: "Fixer", 
            icone: "fa-handshake",
            descricao: "Conecta pessoas. Sabe quem tem o que você precisa.",
            atributoChave: "Proza"
        },
        { 
            nome: "Médico de Rua", 
            icone: "fa-user-md",
            descricao: "Cura com o que tem. Ético ou não, o importante é funcionar.",
            atributoChave: "Rede"
        },
        { 
            nome: "Hacker", 
            icone: "fa-code",
            descricao: "A realidade é apenas outro sistema para ser invadido.",
            atributoChave: "Rede"
        },
        { 
            nome: "Segurança de Boate", 
            icone: "fa-shield-alt",
            descricao: "Mantém a ordem onde a desordem reina.",
            atributoChave: "Carne"
        },
        { 
            nome: "Mecânico", 
            icone: "fa-tools",
            descricao: "Constrói, conserta, modifica. Tudo é matéria-prima.",
            atributoChave: "Rede"
        },
        { 
            nome: "Traficante", 
            icone: "fa-capsules",
            descricao: "Fornece o que as pessoas precisam, querendo ou não.",
            atributoChave: "Malandragem"
        }
    ],

    pericias: [
        "Intimidação", "Enganação", "Percepção", "Investigação", "Vigilância",
        "Atletismo", "Briga", "Armas Brancas", "Armas de Fogo", "Esquiva",
        "Resistência", "Mecânica", "Tecnologia", "Hacking", "Condução",
        "Primeiros Socorros", "Medicina", "Avaliação", "Cobrança", "Autocontrole",
        "Improviso", "Sobrevivência Urbana", "Camuflagem"
    ]
};

// ===== ÁRVORE DE HABILIDADES =====
// Helper: monta uma habilidade padrão (passiva, verde) a partir de [id, nome, descricao]
function hab(id, nome, descricao) {
    return { id, nome, descricao, custo: "🟢", tipo: "passiva", cor: "verde" };
}

const habilidadesArvore = {
    carne: [
        hab("casca_grossa", "Casca Grossa", "Aumenta a resistência contra danos físicos e reduz efeitos de ferimentos."),
        hab("predador_urbano", "Predador Urbano", "Melhora combate corpo a corpo e capacidade de dominar inimigos menores."),
        hab("segundo_folego", "Segundo Fôlego", "Permite recuperar energia em situações extremas."),
        hab("dor_silenciosa", "Dor Silenciosa", "Reduz penalidades causadas por ferimentos."),
        hab("brutalidade_controlada", "Brutalidade Controlada", "Transforma força física em ataques mais devastadores."),
        hab("sobrevivente_nato", "Sobrevivente Nato", "Melhora testes de sobrevivência, fome, frio e condições ruins."),
        hab("pulso_firme", "Pulso Firme", "Mantém controle físico sob pressão ou ameaça."),
        hab("adrenalina", "Adrenalina", "Permite realizar ações extras quando está ferido ou em perigo."),
        hab("muralha_humana", "Muralha Humana", "Protege aliados usando o próprio corpo."),
        hab("resistencia_biologica", "Resistência Biológica", "Maior resistência contra venenos, doenças e drogas."),
        hab("quebra_ossos", "Quebra Ossos", "Golpes físicos podem causar efeitos incapacitantes."),
        hab("instinto_animal", "Instinto Animal", "Reage rapidamente antes que ameaças sejam percebidas."),
        hab("limite_desconhecido", "Limite Desconhecido", "Ultrapassa temporariamente os limites físicos."),
        hab("sobrevivencia_extrema", "Sobrevivência Extrema", "Consegue permanecer vivo em situações quase impossíveis."),
        hab("ultimo_homem_vivo", "Último Homem Vivo", "Quando tudo parece perdido, seu corpo continua funcionando.")
    ],
    intuicao: [
        hab("olhos_da_rua", "Olhos da Rua", "Percebe detalhes escondidos no ambiente."),
        hab("leitura_corporal", "Leitura Corporal", "Identifica emoções, mentiras e intenções."),
        hab("cacador_de_pistas", "Caçador de Pistas", "Melhora investigações."),
        hab("perigo_antes_do_som", "Perigo Antes do Som", "Percebe ameaças antes que aconteçam."),
        hab("memoria_fotografica", "Memória Fotográfica", "Lembra detalhes importantes."),
        hab("instinto_de_sobrevivencia", "Instinto de Sobrevivência", "Toma melhores decisões em situações perigosas."),
        hab("analista_de_campo", "Analista de Campo", "Entende padrões durante missões."),
        hab("rastreador_urbano", "Rastreador Urbano", "Segue pessoas, veículos e informações."),
        hab("ouvido_sensivel", "Ouvido Sensível", "Percebe sons, movimentos e alterações."),
        hab("sexto_sentido", "Sexto Sentido", "Recebe sinais quando algo está errado."),
        hab("mente_investigativa", "Mente Investigativa", "Conecta informações aparentemente aleatórias."),
        hab("antecipacao", "Antecipação", "Prevê movimentos inimigos."),
        hab("perfilador", "Perfilador", "Entende comportamento psicológico."),
        hab("fantasma_da_rua", "Fantasma da Rua", "Sabe quando está sendo seguido."),
        hab("visao_alem_do_obvio", "Visão Além do Óbvio", "Enxerga soluções que outros ignoram.")
    ],
    foco: [
        hab("mira_perfeita", "Mira Perfeita", "Melhora ataques à distância."),
        hab("respiracao_controlada", "Respiração Controlada", "Mantém precisão sob pressão."),
        hab("disciplina_de_ferro", "Disciplina de Ferro", "Resiste a distrações."),
        hab("atirador_profissional", "Atirador Profissional", "Especialização em armas de fogo."),
        hab("maos_rapidas", "Mãos Rápidas", "Recarga e ações rápidas."),
        hab("golpe_calculado", "Golpe Calculado", "Ataques mais precisos contra pontos fracos."),
        hab("controle_motor", "Controle Motor", "Melhora ações delicadas."),
        hab("combate_tecnico", "Combate Técnico", "Usa técnicas avançadas de luta."),
        hab("reacao_instantanea", "Reação Instantânea", "Melhora respostas defensivas."),
        hab("especialista_em_armas", "Especialista em Armas", "Conhece funcionamento e manutenção."),
        hab("duelo_urbano", "Duelo Urbano", "Especialista em confrontos individuais."),
        hab("execucao_limpa", "Execução Limpa", "Finaliza inimigos rapidamente."),
        hab("zona_de_concentracao", "Zona de Concentração", "Entra em estado de foco extremo."),
        hab("mestre_da_precisao", "Mestre da Precisão", "Quase nunca desperdiça oportunidades."),
        hab("a_ultima_bala", "A Última Bala", "Melhora quando está em situação crítica.")
    ],
    manha: [
        hab("maos_leves", "Mãos Leves", "Especialista em furtos pequenos."),
        hab("rosto_desconhecido", "Rosto Desconhecido", "Passa despercebido em multidões."),
        hab("mentiroso_convincente", "Mentiroso Convincente", "Melhora enganações."),
        hab("gato_da_cidade", "Gato da Cidade", "Movimentação silenciosa."),
        hab("mercado_negro", "Mercado Negro", "Conhece contatos ilegais."),
        hab("arrombador", "Arrombador", "Abre fechaduras e sistemas físicos."),
        hab("golpe_baixo", "Golpe Baixo", "Usa truques sujos em combate."),
        hab("camaleao_social", "Camaleão Social", "Adapta comportamento rapidamente."),
        hab("fuga_perfeita", "Fuga Perfeita", "Especialista em escapar."),
        hab("contrabandista", "Contrabandista", "Transporta itens proibidos."),
        hab("leitor_de_golpes", "Leitor de Golpes", "Reconhece armadilhas e fraudes."),
        hab("rei_das_ruas", "Rei das Ruas", "Possui influência entre criminosos."),
        hab("sobrevivencia_ilegal", "Sobrevivência Ilegal", "Consegue recursos onde ninguém consegue."),
        hab("mestre_do_improviso", "Mestre do Improviso", "Transforma objetos comuns em ferramentas."),
        hab("fantasma_criminal", "Fantasma Criminal", "Apaga rastros e identidades.")
    ],
    proza: [
        hab("voz_marcante", "Voz Marcante", "Sua presença chama atenção."),
        hab("negociador", "Negociador", "Melhora acordos."),
        hab("mentira_perfeita", "Mentira Perfeita", "Cria histórias convincentes."),
        hab("intimidador", "Intimidador", "Controla pessoas pelo medo."),
        hab("lider_natural", "Líder Natural", "Inspira aliados."),
        hab("diplomata", "Diplomata", "Resolve conflitos."),
        hab("leitor_social", "Leitor Social", "Entende grupos e hierarquias."),
        hab("manipulador", "Manipulador", "Controla conversas."),
        hab("carisma_perigoso", "Carisma Perigoso", "Atrai aliados e inimigos."),
        hab("informante", "Informante", "Consegue informações através de contatos."),
        hab("sangue_frio", "Sangue Frio", "Mantém controle em discussões."),
        hab("orador", "Orador", "Mobiliza grandes grupos."),
        hab("psicologo_de_rua", "Psicólogo de Rua", "Entende traumas e emoções."),
        hab("nome_conhecido", "Nome Conhecido", "Sua reputação abre portas."),
        hab("lenda_viva", "Lenda Viva", "Sua presença muda decisões.")
    ],
    rede: [
        hab("codigo_limpo", "Código Limpo", "Programação eficiente."),
        hab("invasor_digital", "Invasor Digital", "Realiza ataques virtuais."),
        hab("engenheiro_improvisado", "Engenheiro Improvisado", "Conserta tecnologia com poucos recursos."),
        hab("mente_computacional", "Mente Computacional", "Processa informações rapidamente."),
        hab("especialista_em_sistemas", "Especialista em Sistemas", "Entende redes complexas."),
        hab("criptografo", "Criptógrafo", "Quebra códigos e proteções."),
        hab("fantasma_digital", "Fantasma Digital", "Dificulta rastreamento."),
        hab("mecatronico", "Mecatrônico", "Modifica máquinas e implantes."),
        hab("arquiteto_de_rede", "Arquiteto de Rede", "Cria sistemas próprios."),
        hab("controlador_remoto", "Controlador Remoto", "Manipula equipamentos à distância."),
        hab("cacador_de_dados", "Caçador de Dados", "Encontra informações escondidas."),
        hab("ia_parceira", "IA Parceira", "Trabalha com inteligências artificiais."),
        hab("contra_hacker", "Contra-Hacker", "Defende sistemas."),
        hab("mestre_dos_implantes", "Mestre dos Implantes", "Instala e modifica cibernética."),
        hab("consciencia_digital", "Consciência Digital", "Integra tecnologia e mente.")
    ]
};

// ===== MAESTRIAS DE ARMAS =====
// Cada arma evolui de nível conforme o uso ao longo da história (ajuste manual +/-).
const maestriasGrupos = [
    {
        id: "brancas",
        nome: "Armas Brancas",
        icone: "fa-khanda",
        armas: [
            { key: "facas", nome: "Facas", icone: "fa-utensils" },
            { key: "arremessaveis", nome: "Arremessáveis", icone: "fa-bullseye" },
            { key: "espadas", nome: "Espadas", icone: "fa-khanda" },
            { key: "contundentes", nome: "Contundentes", icone: "fa-hammer" }
        ]
    },
    {
        id: "fogo",
        nome: "Armas de Fogo",
        icone: "fa-gun",
        armas: [
            { key: "pistolas", nome: "Pistolas", icone: "fa-gun" },
            { key: "escopetas", nome: "Escopetas", icone: "fa-gun" },
            { key: "fuzis", nome: "Fuzis", icone: "fa-gun" },
            { key: "metralhadoras", nome: "Metralhadoras", icone: "fa-gun" },
            { key: "submetralhadoras", nome: "Sub-metralhadoras", icone: "fa-gun" },
            { key: "snipers", nome: "Snipers", icone: "fa-crosshairs" },
            { key: "pesadas", nome: "Pesadas", icone: "fa-bomb" }
        ]
    }
];

// Nível máximo de uma maestria (pips exibidos)
const MAESTRIA_MAX = 10;

// Retorna um objeto de maestrias zerado (todas as armas em nível 0)
function maestriasPadrao() {
    const obj = {};
    maestriasGrupos.forEach(g => g.armas.forEach(a => { obj[a.key] = 0; }));
    return obj;
}

// Retorna a estrutura de implantes do corpo vazia
function implantesCorpoPadrao() {
    return { cabeca: [], torax: [], bracos: [], maos: [], pernas: [] };
}

// Regiões do corpo (ordem/rótulos)
const regioesCorpo = [
    { key: "cabeca", nome: "Cabeça" },
    { key: "torax", nome: "Tórax" },
    { key: "bracos", nome: "Braços" },
    { key: "maos", nome: "Mãos" },
    { key: "pernas", nome: "Pernas" }
];

// ===== ATRIBUTOS (6 árvores) =====
// Fonte única da verdade para nome/chave/ícone/descrição de cada atributo.
function listaAtributosBase() {
    return [
        { nome: "Carne", key: "carne", icone: "fa-fist-raised", desc: "O corpo como arma. Resistência, força, sobrevivência e adaptação física. Define Vida e Energia." },
        { nome: "Intuição", key: "intuicao", icone: "fa-eye", desc: "Instinto, percepção e capacidade de entender o mundo antes dos outros." },
        { nome: "Foco", key: "foco", icone: "fa-crosshairs", desc: "Precisão, disciplina, combate e controle técnico." },
        { nome: "Manha", key: "manha", icone: "fa-user-ninja", desc: "Crime, sobrevivência urbana, improviso e malandragem." },
        { nome: "Proza", key: "proza", icone: "fa-comments", desc: "Palavras, influência, manipulação e relações humanas." },
        { nome: "Rede", key: "rede", icone: "fa-network-wired", desc: "Tecnologia, informação, hackers e máquinas." }
    ];
}

// ===== COR / TEMA DA FICHA (personalizável por jogador) =====
const COR_PADRAO = "#ff2e97"; // magenta (accent primário padrão; ciano fica como secundário fixo)

// Temas prontos (cada um é a cor-accent que comanda todo o neon da ficha)
const temasFicha = [
    { nome: "Ciano", cor: "#00e0ff" },
    { nome: "Magenta", cor: "#ff2e97" },
    { nome: "Verde", cor: "#00ff9d" },
    { nome: "Âmbar", cor: "#f2b33d" },
    { nome: "Vermelho", cor: "#ff5470" },
    { nome: "Roxo", cor: "#b56bff" },
    { nome: "Laranja", cor: "#ff8a3d" },
    { nome: "Branco", cor: "#e6f3ff" }
];

// Converte "#rrggbb" em "r, g, b" (para usar em rgba())
function hexParaRgb(hex) {
    let h = String(hex || COR_PADRAO).replace('#', '').trim();
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const n = parseInt(h, 16);
    if (isNaN(n)) return '0, 224, 255';
    return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

// Aplica a cor-accent do personagem: recolore todo o neon (ícones, bordas, brilhos, barras, glitch)
function aplicarCorFicha(cor) {
    const c = cor || COR_PADRAO;
    const rgb = hexParaRgb(c);
    const root = document.documentElement;
    root.style.setProperty('--cor-destaque-ciano', c);
    root.style.setProperty('--cor-destaque-azul', c); // elimina o azul legado: segue o tema
    root.style.setProperty('--accent', c);
    root.style.setProperty('--accent-rgb', rgb);
}

// ===== ESTADO DO PERSONAGEM =====
let personagem = {
    nome: "",
    origem: "",
    classe: null,
    nivel: 1,
    xp: 0,
    xpProximoNivel: 100,
    pontosAtributoDisponiveis: 0,
    periciasExtrasDisponiveis: 0,
    atributos: {
        carne: 1,
        intuicao: 1,
        foco: 1,
        manha: 1,
        proza: 1,
        rede: 1
    },
    periciasEscolhidas: [],
    habilidadesAdquiridas: [],
    pontosAtributos: 7,
    maestrias: maestriasPadrao(),
    detalhes: {
        idade: 25,
        altura: 175,
        aparencia: "",
        historia: ""
    },
    hacks: "",
    inventario: "",
    itensPersonalizados: [],
    implantes: "",
    implantesCorpo: implantesCorpoPadrao(),
    cor: COR_PADRAO,
    foto: "",
    medidores: {
        ferimentos: Array(6).fill(false),
        estresse: Array(6).fill(false),
        exposicao: Array(6).fill(false),
        fome: Array(6).fill(false),
        sede: Array(6).fill(false),
        sono: Array(6).fill(false),
        higiene: Array(6).fill(false),
        alcool: Array(6).fill(false),
        cigarro: Array(6).fill(false),
        drogas: Array(6).fill(false)
    },
    statusAtual: {
        vida: 10,
        energia: 8
    },
    dataCriacao: null,
    ultimaAtualizacao: null
};

// ===== VARIÁVEIS GLOBAIS =====
let periciaExtraSelecionada = null;
let fichaAtualId = null;
let atributoSelecionado = null;
let itemParaRemover = null;
let fichaSelecionadaId = null;
let itensPersonalizados = [];
let regiaoCorpoSelecionada = null;

// ===== NUVEM (Firebase) =====
let db = null;                 // instância do Firestore
let cloudAtivo = false;        // true quando o Firebase está configurado e iniciado
let mesaCodigo = '';           // código da mesa (compartilhado entre jogadores e mestre)
let unsubscribeNuvem = null;   // cancela o listener em tempo real (gerenciador de fichas salvas)
let cloudPushTimer = null;     // debounce do envio automático

// ===== MESTRE / SYNC AO VIVO =====
let modoMestre = false;            // true quando entrou no painel do mestre
let fichaVivaId = null;            // id da ficha do jogador assinada ao vivo
let unsubscribeFichaViva = null;   // cancela o listener da própria ficha (jogador)
let unsubscribeMesaMestre = null;  // cancela o listener do dashboard do mestre
let fichasMesaCache = {};          // id -> dados da ficha (para as ações rápidas do mestre)
let unsubscribeNpcs = null;        // listener dos NPCs
let npcsCache = {};                // id -> dados do NPC
let npcEditId = null;              // NPC em edição no modal
let unsubscribeCombate = null;     // listener do tracker de combate
let unsubscribeCompartilhadas = null; // listener das fichas compartilhadas (cópias pra mesa)

// ===== FUNÇÕES DE CONTROLE DE TELAS =====
function mostrarTela(idTela) {
    console.log(`Tentando mostrar tela: ${idTela}`);
    
    // Esconde todas as telas
    document.querySelectorAll('.tela').forEach(tela => {
        tela.classList.remove('ativa');
    });
    
    // Mostra a tela solicitada
    const telaAlvo = document.getElementById(idTela);
    if (telaAlvo) {
        telaAlvo.classList.add('ativa');
        console.log(`Tela ${idTela} mostrada com sucesso`);
        
        // Rola para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Atualiza contador de fichas na intro
        if (idTela === 'tela-intro') {
            atualizarContadorFichas();
            // Se o boot já rodou, mostra o menu direto ao voltar pra intro
            const menuIntro = document.getElementById('intro-menu');
            if (menuIntro && introBootRodou) menuIntro.classList.add('revelado');
        }
        
        // Atualiza ficha se for a tela da ficha
        if (idTela === 'tela-ficha') {
            rodarBoot();
            atualizarFicha();
            atualizarUltimaAtualizacao();
        }
    } else {
        console.error(`Tela ${idTela} não encontrada!`);
    }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM carregado, iniciando sistema...");
    
    // Primeiro: garantir que só a tela intro está visível
    document.querySelectorAll('.tela').forEach(tela => {
        tela.classList.remove('ativa');
    });
    document.getElementById('tela-intro').classList.add('ativa');
    
    // Esconde o modal de fichas salvas completamente
    const modalFichas = document.getElementById('modal-fichas-inicio');
    const overlayFichas = document.getElementById('overlay-fichas');
    if (modalFichas) {
        modalFichas.style.display = 'none';
        modalFichas.classList.remove('active');
    }
    if (overlayFichas) {
        overlayFichas.style.display = 'none';
        overlayFichas.classList.remove('active');
    }
    
    // Inicializa dados
    inicializarDados();
    
    // Configura eventos
    configurarEventos();
    
    // Carrega fichas salvas
    carregarFichasSalvas();
    
    // Atualiza contador
    atualizarContadorFichas();
    
    // Inicializa quadradinhos e habilidades
    inicializarQuadradinhos();
    inicializarHabilidades();
    inicializarArvoreModal();
    inicializarMaestrias();
    inicializarCorpoImplantes();
    inicializarNuvem();
    inicializarPersonalizacao();
    runIntroBoot();

    console.log("Sistema inicializado com sucesso!");
});

function inicializarDados() {
    // Carrega origens
    const listaOrigens = document.getElementById('lista-origens');
    if (listaOrigens) {
        listaOrigens.innerHTML = '';
        dadosSistema.origens.forEach(origem => {
            const div = document.createElement('div');
            div.className = 'origem-card';
            div.innerHTML = `
                <div>
                    <div class="origem-nome">${origem.nome}</div>
                    <div class="origem-descricao">${origem.descricao}</div>
                </div>
                <div class="origem-seta">▶</div>
            `;
            div.addEventListener('click', () => selecionarOrigem(origem.nome, div));
            listaOrigens.appendChild(div);
        });
    }
    
    // Carrega classes
    const listaClasses = document.getElementById('lista-classes');
    if (listaClasses) {
        listaClasses.innerHTML = '';
        dadosSistema.classes.forEach(classe => {
            const div = document.createElement('div');
            div.className = 'classe-card';
            div.innerHTML = `
                <div class="classe-icone"><i class="fas ${classe.icone}"></i></div>
                <div class="classe-nome">${classe.nome}</div>
                <div class="classe-info"><i class="fas fa-star"></i> Atributo-chave: ${classe.atributoChave}</div>
                <div class="classe-desc">${classe.descricao}</div>
            `;
            div.addEventListener('click', () => selecionarClasse(classe, div));
            listaClasses.appendChild(div);
        });
    }
    
    // Carrega atributos
    const listaAtributos = document.getElementById('lista-atributos');
    if (listaAtributos) {
        listaAtributos.innerHTML = '';
        const atributos = listaAtributosBase();
        
        atributos.forEach(atrib => {
            const div = document.createElement('div');
            div.className = 'atributo-card';
            div.innerHTML = `
                <div class="atributo-header">
                    <div class="atributo-icone"><i class="fas ${atrib.icone}"></i></div>
                    <div class="atributo-nome">${atrib.nome}</div>
                </div>
                <div class="atributo-valor" id="valor-${atrib.key}">1</div>
                <div class="atributo-controles">
                    <button class="atributo-btn" onclick="alterarAtributo('${atrib.key}', -1)" id="btn-dim-${atrib.key}" disabled>
                        <i class="fas fa-minus"></i>
                    </button>
                    <button class="atributo-btn" onclick="alterarAtributo('${atrib.key}', 1)" id="btn-aum-${atrib.key}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="atributo-desc">${atrib.desc}</div>
            `;
            listaAtributos.appendChild(div);
        });
    }
    
    // Carrega perícias
    const listaPericias = document.getElementById('lista-pericias');
    if (listaPericias) {
        listaPericias.innerHTML = '';
        dadosSistema.pericias.forEach(pericia => {
            const div = document.createElement('div');
            div.className = 'pericia-item';
            div.innerHTML = `
                <div class="pericia-checkbox"></div>
                <div class="pericia-nome">${pericia}</div>
            `;
            div.addEventListener('click', () => selecionarPericia(pericia, div));
            listaPericias.appendChild(div);
        });
    }
    
    // Carrega perícias para o modal de escolha extra
    const listaPericiasExtra = document.getElementById('lista-pericias-extra');
    if (listaPericiasExtra) {
        listaPericiasExtra.innerHTML = '';
        dadosSistema.pericias.forEach(pericia => {
            const div = document.createElement('div');
            div.className = 'pericia-item';
            div.setAttribute('data-pericia', pericia);
            div.innerHTML = `
                <div class="pericia-checkbox"></div>
                <div class="pericia-nome">${pericia}</div>
            `;
            div.addEventListener('click', () => selecionarPericiaExtra(pericia, div));
            listaPericiasExtra.appendChild(div);
        });
    }
}

function inicializarQuadradinhos() {
    // Inicializa todos os quadradinhos dos medidores
    const medidores = ['ferimentos', 'estresse', 'exposicao', 'fome', 'sede', 'sono', 'higiene', 'alcool', 'cigarro', 'drogas'];
    
    medidores.forEach(medidor => {
        const container = document.getElementById(`quad-${medidor}`);
        if (container) {
            container.innerHTML = '';
            for (let i = 0; i < 6; i++) {
                const quadrado = document.createElement('div');
                quadrado.className = 'quadrado';
                if (medidor === 'ferimentos') {
                    quadrado.classList.add('dano');
                }
                quadrado.setAttribute('data-medidor', medidor);
                quadrado.setAttribute('data-index', i);
                quadrado.addEventListener('click', () => toggleQuadradinho(medidor, i, quadrado));
                container.appendChild(quadrado);
            }
        }
    });
}

function toggleQuadradinho(medidor, index) {
    // Medidores (condições/necessidades/vícios) só o MESTRE altera.
    // Para o jogador ficam travados — o mestre muda e reflete ao vivo.
    if (!modoMestre) return;

    // Preenchimento cumulativo (tipo barra): clicar no quadrado i preenche do 1º até o i.
    const arr = personagem.medidores[medidor];
    if (!arr) return;

    // Descobre o maior quadrado atualmente preenchido
    let maxPreenchido = -1;
    arr.forEach((v, i) => { if (v) maxPreenchido = i; });

    // Se clicar exatamente no último preenchido, desmarca ele (nível cai 1).
    // Caso contrário, preenche até o quadrado clicado.
    const novoNivel = (arr[index] && index === maxPreenchido) ? index : index + 1;

    for (let k = 0; k < arr.length; k++) {
        arr[k] = k < novoNivel;
    }

    // Re-renderiza os quadradinhos deste medidor
    atualizarQuadradinhos();

    // Salva automaticamente
    salvarAutomaticamente();
}

// Constrói uma árvore de habilidades (abas + conteúdo) dentro dos containers dados.
// prefixo garante IDs únicos entre a versão embutida no card e a versão do modal.
function construirArvore(tabsContainer, conteudoContainer, prefixo) {
    if (!tabsContainer || !conteudoContainer) return;

    tabsContainer.innerHTML = '';
    conteudoContainer.innerHTML = '';

    const baseAtributos = listaAtributosBase();

    baseAtributos.forEach((info, index) => {
        const atrib = info.key;

        // Aba
        const tab = document.createElement('div');
        tab.className = `habilidade-tab ${index === 0 ? 'ativa' : ''}`;
        tab.setAttribute('data-atributo', atrib);
        tab.setAttribute('data-arvore', prefixo);
        tab.innerHTML = `<i class="fas ${info.icone}"></i> ${info.nome}`;
        tab.addEventListener('click', () => ativarCategoriaArvore(prefixo, atrib));
        tabsContainer.appendChild(tab);

        // Conteúdo
        const categoria = document.createElement('div');
        categoria.className = `habilidade-categoria ${index === 0 ? 'ativa' : ''}`;
        categoria.setAttribute('data-arvore', prefixo);
        categoria.setAttribute('data-atributo', atrib);
        categoria.id = `${prefixo}-${atrib}`;

        habilidadesArvore[atrib].forEach(habilidade => {
            const adquirida = personagem.habilidadesAdquiridas.some(h => h.id === habilidade.id && h.atributo === atrib);
            const div = document.createElement('div');
            div.className = `habilidade-item ${adquirida ? 'adquirida' : ''}`;
            div.setAttribute('data-id', habilidade.id);
            div.setAttribute('data-atributo', atrib);
            div.setAttribute('data-cor', habilidade.cor);

            div.innerHTML = `
                <div class="habilidade-header">
                    <div class="habilidade-nome">
                        <span class="bolinha-habilidade ${habilidade.cor}"></span>
                        ${habilidade.nome}
                    </div>
                    <div class="habilidade-custo">${habilidade.custo}</div>
                </div>
                <div class="habilidade-desc">${habilidade.descricao}</div>
                <div class="habilidade-check"><i class="fas fa-check"></i></div>
            `;

            div.addEventListener('click', () => toggleHabilidade(habilidade.id, atrib, div));
            categoria.appendChild(div);
        });

        conteudoContainer.appendChild(categoria);
    });
}

// Ativa a aba/categoria de uma árvore específica (embutida ou modal), sem afetar a outra.
function ativarCategoriaArvore(prefixo, atributo) {
    document.querySelectorAll(`.habilidade-tab[data-arvore="${prefixo}"]`).forEach(t => {
        t.classList.toggle('ativa', t.getAttribute('data-atributo') === atributo);
    });
    document.querySelectorAll(`.habilidade-categoria[data-arvore="${prefixo}"]`).forEach(c => {
        c.classList.toggle('ativa', c.getAttribute('data-atributo') === atributo);
    });
}

// Sincroniza o estado "adquirida" de todos os itens (card + modal) com o personagem.
function sincronizarArvores() {
    document.querySelectorAll('.habilidade-item').forEach(el => {
        const id = el.getAttribute('data-id');
        const at = el.getAttribute('data-atributo');
        const adq = personagem.habilidadesAdquiridas.some(h => h.id === id && h.atributo === at);
        el.classList.toggle('adquirida', adq);
    });
}

function inicializarHabilidades() {
    construirArvore(
        document.getElementById('habilidades-tabs'),
        document.getElementById('habilidades-conteudo'),
        'habilidades'
    );
}

function inicializarArvoreModal() {
    construirArvore(
        document.getElementById('habilidades-tabs-modal'),
        document.getElementById('habilidades-conteudo-modal'),
        'arvoremodal'
    );

    const btnExpandir = document.getElementById('btn-expandir-arvore');
    if (btnExpandir) btnExpandir.addEventListener('click', abrirModalArvore);
}

function abrirModalArvore() {
    const modal = document.getElementById('modal-arvore');
    if (!modal) return;
    sincronizarArvores();
    const pontosEl = document.getElementById('arvore-modal-pontos');
    if (pontosEl) pontosEl.textContent = personagem.pontosAtributoDisponiveis;
    modal.classList.add('active');
}

// ===== MAESTRIAS DE ARMAS =====
function inicializarMaestrias() {
    const tabsContainer = document.getElementById('maestria-tabs');
    const conteudoContainer = document.getElementById('maestria-conteudo');
    if (!tabsContainer || !conteudoContainer) return;

    tabsContainer.innerHTML = '';
    conteudoContainer.innerHTML = '';

    maestriasGrupos.forEach((grupo, index) => {
        // Aba do grupo
        const tab = document.createElement('div');
        tab.className = `maestria-tab ${index === 0 ? 'ativa' : ''}`;
        tab.setAttribute('data-grupo', grupo.id);
        tab.innerHTML = `<i class="fas ${grupo.icone}"></i> ${grupo.nome}`;
        tab.addEventListener('click', () => mostrarMaestriaGrupo(grupo.id));
        tabsContainer.appendChild(tab);

        // Conteúdo do grupo
        const categoria = document.createElement('div');
        categoria.className = `maestria-categoria ${index === 0 ? 'ativa' : ''}`;
        categoria.id = `maestrias-${grupo.id}`;

        grupo.armas.forEach(arma => {
            const item = document.createElement('div');
            item.className = 'maestria-item';
            item.innerHTML = `
                <div class="maestria-info">
                    <i class="fas ${arma.icone}"></i>
                    <span class="maestria-nome">${arma.nome}</span>
                </div>
                <div class="maestria-controle">
                    <div class="maestria-pips" id="maestria-pips-${arma.key}"></div>
                    <div class="maestria-nivel-box">
                        <button class="maestria-btn" data-mkey="${arma.key}" data-delta="-1" aria-label="Diminuir"><i class="fas fa-minus"></i></button>
                        <span class="maestria-nivel" id="maestria-nivel-${arma.key}">0</span>
                        <button class="maestria-btn" data-mkey="${arma.key}" data-delta="1" aria-label="Aumentar"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            `;
            categoria.appendChild(item);
        });

        conteudoContainer.appendChild(categoria);
    });

    // Delegação dos botões +/- (o container é fixo)
    conteudoContainer.addEventListener('click', function(e) {
        const btn = e.target.closest('.maestria-btn');
        if (!btn) return;
        const mkey = btn.getAttribute('data-mkey');
        const delta = parseInt(btn.getAttribute('data-delta'), 10);
        alterarMaestria(mkey, delta);
    });
}

function mostrarMaestriaGrupo(grupoId) {
    document.querySelectorAll('.maestria-tab').forEach(t => t.classList.remove('ativa'));
    const tab = document.querySelector(`.maestria-tab[data-grupo="${grupoId}"]`);
    if (tab) tab.classList.add('ativa');

    document.querySelectorAll('.maestria-categoria').forEach(c => c.classList.remove('ativa'));
    const cat = document.getElementById(`maestrias-${grupoId}`);
    if (cat) cat.classList.add('ativa');
}

function alterarMaestria(mkey, delta) {
    if (!personagem.maestrias) personagem.maestrias = maestriasPadrao();
    let valor = personagem.maestrias[mkey] || 0;
    valor = Math.max(0, Math.min(MAESTRIA_MAX, valor + delta));
    personagem.maestrias[mkey] = valor;
    atualizarMaestriaItem(mkey);
    salvarAutomaticamente();
}

function atualizarMaestriaItem(mkey) {
    const nivel = (personagem.maestrias && personagem.maestrias[mkey]) || 0;

    const nivelEl = document.getElementById(`maestria-nivel-${mkey}`);
    if (nivelEl) nivelEl.textContent = nivel;

    const pipsEl = document.getElementById(`maestria-pips-${mkey}`);
    if (pipsEl) {
        pipsEl.innerHTML = '';
        for (let i = 1; i <= MAESTRIA_MAX; i++) {
            const pip = document.createElement('span');
            pip.className = `maestria-pip ${i <= nivel ? 'ativo' : ''}`;
            pipsEl.appendChild(pip);
        }
    }
}

function renderMaestrias() {
    if (!personagem.maestrias) personagem.maestrias = maestriasPadrao();
    maestriasGrupos.forEach(g => g.armas.forEach(a => atualizarMaestriaItem(a.key)));
}

// ===== CORPO / IMPLANTES =====
function escaparHTML(str) {
    return String(str == null ? '' : str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function nomeRegiao(regiao) {
    const r = regioesCorpo.find(x => x.key === regiao);
    return r ? r.nome : regiao;
}

function inicializarCorpoImplantes() {
    // Cliques nas regiões do boneco (SVG)
    const svg = document.getElementById('corpo-svg');
    if (svg) {
        svg.querySelectorAll('.corpo-regiao').forEach(regiaoEl => {
            regiaoEl.addEventListener('click', () => {
                selecionarRegiaoCorpo(regiaoEl.getAttribute('data-regiao'));
            });
        });
    }

    // Legenda de regiões (com contagem), também clicável
    const legenda = document.getElementById('corpo-legenda');
    if (legenda) {
        legenda.innerHTML = '';
        regioesCorpo.forEach(r => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'corpo-legenda-item';
            btn.setAttribute('data-regiao', r.key);
            btn.innerHTML = `${r.nome} <span class="corpo-badge" id="corpo-badge-${r.key}">0</span>`;
            btn.addEventListener('click', () => selecionarRegiaoCorpo(r.key));
            legenda.appendChild(btn);
        });
    }

    // Confirmar implante (modal — botão fixo)
    const btnConfirmar = document.getElementById('btn-confirmar-implante');
    if (btnConfirmar) btnConfirmar.addEventListener('click', confirmarImplante);

    // Remoção de implante (delegação — o painel é fixo)
    const painel = document.getElementById('corpo-painel');
    if (painel) {
        painel.addEventListener('click', function(e) {
            const btnAdd = e.target.closest('#btn-add-implante');
            if (btnAdd) { abrirModalImplante(); return; }
            const btnRem = e.target.closest('.btn-remover-implante');
            if (btnRem) {
                const idx = parseInt(btnRem.getAttribute('data-index'), 10);
                removerImplante(regiaoCorpoSelecionada, idx);
            }
        });
    }
}

function selecionarRegiaoCorpo(regiao) {
    regiaoCorpoSelecionada = regiao;

    // Destaca a região no boneco
    document.querySelectorAll('#corpo-svg .corpo-regiao').forEach(el => {
        el.classList.toggle('selecionada', el.getAttribute('data-regiao') === regiao);
    });

    // Destaca na legenda
    document.querySelectorAll('.corpo-legenda-item').forEach(el => {
        el.classList.toggle('ativo', el.getAttribute('data-regiao') === regiao);
    });

    renderPainelCorpo();
}

function renderPainelCorpo() {
    const painel = document.getElementById('corpo-painel');
    if (!painel) return;

    if (!personagem.implantesCorpo) personagem.implantesCorpo = implantesCorpoPadrao();

    if (!regiaoCorpoSelecionada) {
        painel.innerHTML = '<div class="corpo-painel-vazio"><i class="fas fa-hand-pointer"></i> Clique em uma parte do corpo para ver e adicionar implantes.</div>';
        return;
    }

    const lista = personagem.implantesCorpo[regiaoCorpoSelecionada] || [];
    let html = `
        <div class="corpo-painel-header">
            <h4><i class="fas fa-microchip"></i> ${escaparHTML(nomeRegiao(regiaoCorpoSelecionada))}</h4>
            <button class="btn-add-implante" id="btn-add-implante" title="Adicionar implante" aria-label="Adicionar implante"><i class="fas fa-plus"></i></button>
        </div>
    `;

    if (lista.length === 0) {
        html += '<div class="implantes-vazio">Nenhum implante nesta região ainda.</div>';
    } else {
        html += '<div class="implantes-lista">';
        lista.forEach((imp, idx) => {
            html += `
                <div class="implante-chip">
                    <button class="btn-remover-implante" data-index="${idx}" title="Remover"><i class="fas fa-times"></i></button>
                    <div class="implante-nome"><i class="fas fa-microchip"></i> ${escaparHTML(imp.nome)}</div>
                    ${imp.descricao ? `<div class="implante-desc">${escaparHTML(imp.descricao)}</div>` : ''}
                </div>
            `;
        });
        html += '</div>';
    }

    painel.innerHTML = html;
}

function abrirModalImplante() {
    if (!regiaoCorpoSelecionada) {
        alert('Selecione uma parte do corpo primeiro!');
        return;
    }
    const modal = document.getElementById('modal-implante');
    if (!modal) return;

    const regiaoLabel = document.getElementById('modal-implante-regiao');
    if (regiaoLabel) regiaoLabel.textContent = nomeRegiao(regiaoCorpoSelecionada);

    const nomeInput = document.getElementById('input-implante-nome');
    const descInput = document.getElementById('input-implante-desc');
    if (nomeInput) nomeInput.value = '';
    if (descInput) descInput.value = '';

    modal.classList.add('active');
    if (nomeInput) setTimeout(() => nomeInput.focus(), 50);
}

function confirmarImplante() {
    if (!regiaoCorpoSelecionada) return;

    const nomeInput = document.getElementById('input-implante-nome');
    const descInput = document.getElementById('input-implante-desc');
    const nome = (nomeInput ? nomeInput.value : '').trim();
    const descricao = (descInput ? descInput.value : '').trim();

    if (!nome) {
        alert('Dê um nome ao implante!');
        return;
    }

    if (!personagem.implantesCorpo) personagem.implantesCorpo = implantesCorpoPadrao();
    if (!personagem.implantesCorpo[regiaoCorpoSelecionada]) personagem.implantesCorpo[regiaoCorpoSelecionada] = [];
    personagem.implantesCorpo[regiaoCorpoSelecionada].push({ nome, descricao });

    const modal = document.getElementById('modal-implante');
    if (modal) modal.classList.remove('active');

    renderPainelCorpo();
    atualizarBadgesCorpo();
    salvarAutomaticamente();
}

function removerImplante(regiao, index) {
    if (!regiao || !personagem.implantesCorpo || !personagem.implantesCorpo[regiao]) return;
    const imp = personagem.implantesCorpo[regiao][index];
    if (!imp) return;

    if (confirm(`Remover implante "${imp.nome}"?`)) {
        personagem.implantesCorpo[regiao].splice(index, 1);
        renderPainelCorpo();
        atualizarBadgesCorpo();
        salvarAutomaticamente();
    }
}

function atualizarBadgesCorpo() {
    if (!personagem.implantesCorpo) personagem.implantesCorpo = implantesCorpoPadrao();
    regioesCorpo.forEach(r => {
        const count = (personagem.implantesCorpo[r.key] || []).length;

        const badge = document.getElementById(`corpo-badge-${r.key}`);
        if (badge) {
            badge.textContent = count;
            badge.classList.toggle('vazio', count === 0);
        }

        document.querySelectorAll(`#corpo-svg .corpo-regiao[data-regiao="${r.key}"]`).forEach(el => {
            el.classList.toggle('tem-implante', count > 0);
        });
    });
}

function renderCorpoImplantes() {
    atualizarBadgesCorpo();
    renderPainelCorpo();
}

function toggleHabilidade(idHabilidade, atributo, elemento) {
    const index = personagem.habilidadesAdquiridas.findIndex(h => h.id === idHabilidade && h.atributo === atributo);

    if (index === -1) {
        // Verifica se tem pontos de habilidade disponíveis
        if (personagem.pontosAtributoDisponiveis > 0) {
            const habilidade = habilidadesArvore[atributo].find(h => h.id === idHabilidade);
            personagem.habilidadesAdquiridas.push({
                id: idHabilidade,
                atributo: atributo,
                nome: habilidade.nome,
                descricao: habilidade.descricao,
                cor: habilidade.cor
            });
            personagem.pontosAtributoDisponiveis--;
        } else {
            alert("Você não tem pontos de habilidade disponíveis!");
            return;
        }
    } else {
        personagem.habilidadesAdquiridas.splice(index, 1);
        personagem.pontosAtributoDisponiveis++;
    }

    // Sincroniza card + modal, atualiza contadores e salva
    sincronizarArvores();
    atualizarFicha();
    atualizarHabilidadesResumo();
    salvarAutomaticamente();
}

function atualizarHabilidadesResumo() {
    const resumoContainer = document.getElementById('habilidades-resumo');
    if (!resumoContainer) return;
    
    // Limpa e recria a seção de habilidades
    resumoContainer.innerHTML = '';
    
    if (personagem.habilidadesAdquiridas.length === 0) {
        const p = document.createElement('p');
        p.className = 'nenhuma-habilidade';
        p.textContent = 'Nenhuma habilidade adquirida ainda.';
        resumoContainer.appendChild(p);
        return;
    }
    
    // Cria um item para cada habilidade adquirida
    personagem.habilidadesAdquiridas.forEach((habilidade, index) => {
        const div = document.createElement('div');
        div.className = `habilidade-resumo-item ${habilidade.cor}`;
        div.innerHTML = `
            <div class="habilidade-resumo-nome">
                <span class="bolinha"></span>
                ${habilidade.nome}
            </div>
            <div class="habilidade-resumo-desc">${habilidade.descricao}</div>
        `;
        resumoContainer.appendChild(div);
    });
}

function configurarEventos() {
    console.log("Configurando eventos...");
    
    // ===== EVENTOS DA TELA INICIAL =====
    
    // Botão iniciar
    const btnIniciar = document.getElementById('btn-iniciar');
    if (btnIniciar) {
        console.log("Botão iniciar encontrado, adicionando evento...");
        btnIniciar.addEventListener('click', function() {
            console.log("Botão INICIAR SISTEMA clicado!");
            mostrarTela('tela-origens');
        });
    } else {
        console.error("Botão iniciar NÃO encontrado!");
    }
    
    // Botão carregar ficha na tela inicial
    const btnCarregarFichaInicio = document.getElementById('btn-carregar-ficha-inicio');
    if (btnCarregarFichaInicio) {
        btnCarregarFichaInicio.addEventListener('click', function() {
            const fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
            
            if (fichas.length === 0) {
                alert("Não há fichas salvas!");
                return;
            }
            
            if (fichas.length === 1) {
                // Se só tem uma ficha, carrega direto
                carregarFicha(fichas[0].id);
                alert(`Ficha "${fichas[0].personagem.nome}" carregada!`);
            } else {
                // Se tem várias, mostra o gerenciador
                mostrarGerenciadorFichas();
            }
        });
    }
    
    // Botão gerenciar fichas
    const btnGerenciarFichas = document.getElementById('btn-gerenciar-fichas');
    if (btnGerenciarFichas) {
        btnGerenciarFichas.addEventListener('click', mostrarGerenciadorFichas);
    }
    
    // ===== EVENTOS DO GERENCIADOR DE FICHAS =====
    
    // Botão fechar gerenciador
    const btnFecharFichas = document.getElementById('btn-fechar-fichas');
    if (btnFecharFichas) {
        btnFecharFichas.addEventListener('click', fecharGerenciadorFichas);
    }
    
    // Botão carregar selecionada
    const btnCarregarSelecionada = document.getElementById('btn-carregar-selecionada');
    if (btnCarregarSelecionada) {
        btnCarregarSelecionada.addEventListener('click', function() {
            if (!fichaSelecionadaId) {
                alert("Selecione uma ficha primeiro!");
                return;
            }
            
            carregarFicha(fichaSelecionadaId);
            fecharGerenciadorFichas();
        });
    }
    
    // Botão remover selecionada
    const btnRemoverSelecionada = document.getElementById('btn-remover-selecionada');
    if (btnRemoverSelecionada) {
        btnRemoverSelecionada.addEventListener('click', function() {
            if (!fichaSelecionadaId) {
                alert("Selecione uma ficha primeiro!");
                return;
            }
            
            if (confirm("Tem certeza que deseja remover esta ficha? Esta ação não pode ser desfeita.")) {
                removerFicha(fichaSelecionadaId);
                fichaSelecionadaId = null;
                atualizarListaFichasInicio();
                atualizarContadorFichas();
                atualizarBotoesGerenciador();
            }
        });
    }
    
    // Botão remover todas
    const btnRemoverTodasFichas = document.getElementById('btn-remover-todas-fichas');
    if (btnRemoverTodasFichas) {
        btnRemoverTodasFichas.addEventListener('click', function() {
            const fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
            
            if (fichas.length === 0) {
                alert("Não há fichas para remover!");
                return;
            }
            
            if (confirm(`Tem certeza que deseja remover TODAS as ${fichas.length} fichas? Esta ação não pode ser desfeita.`)) {
                localStorage.removeItem('neo-urbano-fichas');
                fichaSelecionadaId = null;
                atualizarListaFichasInicio();
                atualizarContadorFichas();
                atualizarBotoesGerenciador();
                alert("Todas as fichas foram removidas!");
            }
        });
    }
    
    // Fechar gerenciador ao clicar no overlay
    const overlayFichas = document.getElementById('overlay-fichas');
    if (overlayFichas) {
        overlayFichas.addEventListener('click', fecharGerenciadorFichas);
    }
    
    // ===== EVENTOS DE NAVEGAÇÃO =====
    
    // Navegação entre telas
    const btnVoltarOrigem = document.getElementById('btn-voltar-origem');
    if (btnVoltarOrigem) {
        btnVoltarOrigem.addEventListener('click', () => mostrarTela('tela-intro'));
    }
    
    const btnProximoOrigem = document.getElementById('btn-proximo-origem');
    if (btnProximoOrigem) {
        btnProximoOrigem.addEventListener('click', () => {
            if (personagem.origem) {
                mostrarTela('tela-classes');
            } else {
                alert("Selecione uma origem primeiro!");
            }
        });
    }
    
    const btnVoltarClasse = document.getElementById('btn-voltar-classe');
    if (btnVoltarClasse) {
        btnVoltarClasse.addEventListener('click', () => mostrarTela('tela-origens'));
    }
    
    const btnProximoClasse = document.getElementById('btn-proximo-classe');
    if (btnProximoClasse) {
        btnProximoClasse.addEventListener('click', () => {
            if (personagem.classe) {
                mostrarTela('tela-atributos');
            } else {
                alert("Selecione uma classe primeiro!");
            }
        });
    }
    
    const btnVoltarAtributos = document.getElementById('btn-voltar-atributos');
    if (btnVoltarAtributos) {
        btnVoltarAtributos.addEventListener('click', () => mostrarTela('tela-classes'));
    }
    
    const btnProximoAtributos = document.getElementById('btn-proximo-atributos');
    if (btnProximoAtributos) {
        btnProximoAtributos.addEventListener('click', () => {
            if (personagem.pontosAtributos === 0) {
                mostrarTela('tela-pericias');
            } else {
                alert(`Ainda há ${personagem.pontosAtributos} ponto(s) para distribuir!`);
            }
        });
    }
    
    const btnVoltarPericias = document.getElementById('btn-voltar-pericias');
    if (btnVoltarPericias) {
        btnVoltarPericias.addEventListener('click', () => mostrarTela('tela-atributos'));
    }
    
    const btnProximoPericias = document.getElementById('btn-proximo-pericias');
    if (btnProximoPericias) {
        btnProximoPericias.addEventListener('click', () => {
            if (personagem.periciasEscolhidas.length === 3) {
                mostrarTela('tela-detalhes');
            } else {
                alert(`Selecione exatamente 3 perícias! (${personagem.periciasEscolhidas.length}/3)`);
            }
        });
    }
    
    const btnVoltarDetalhes = document.getElementById('btn-voltar-detalhes');
    if (btnVoltarDetalhes) {
        btnVoltarDetalhes.addEventListener('click', () => mostrarTela('tela-pericias'));
    }
    
    const btnGerarFicha = document.getElementById('btn-gerar-ficha');
    if (btnGerarFicha) {
        btnGerarFicha.addEventListener('click', gerarFicha);
    }
    
    // ===== EVENTOS DA FICHA =====
    
    // Botões da ficha
    const btnNovoPersonagem = document.getElementById('btn-novo-personagem');
    if (btnNovoPersonagem) {
        btnNovoPersonagem.addEventListener('click', () => {
            if (confirm('Deseja criar um novo personagem? A ficha atual não será perdida se já foi salva.')) {
                resetarPersonagem();
                mostrarTela('tela-intro');
            }
        });
    }
    
    const btnCarregarFicha = document.getElementById('btn-carregar-ficha');
    if (btnCarregarFicha) {
        btnCarregarFicha.addEventListener('click', () => {
            carregarFichasSalvas();
            const listaFichas = document.getElementById('lista-fichas-salvas');
            if (listaFichas) {
                listaFichas.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    const btnSubirNivel = document.getElementById('btn-subir-nivel');
    if (btnSubirNivel) {
        btnSubirNivel.addEventListener('click', mostrarModalNivel);
    }
    
    const btnSalvarFicha = document.getElementById('btn-salvar-ficha');
    if (btnSalvarFicha) {
        btnSalvarFicha.addEventListener('click', salvarFicha);
    }
    
    // Botões de atributo na ficha
    const btnUsarPontoAtributo = document.getElementById('btn-usar-ponto-atributo');
    if (btnUsarPontoAtributo) {
        btnUsarPontoAtributo.addEventListener('click', usarPontoAtributo);
    }
    
    const btnEscolherPericia = document.getElementById('btn-escolher-pericia');
    if (btnEscolherPericia) {
        btnEscolherPericia.addEventListener('click', mostrarModalPericia);
    }
    
    // ===== EVENTOS DE ENTRADA DE DADOS =====
    
    const nomePersonagem = document.getElementById('nome-personagem');
    if (nomePersonagem) {
        nomePersonagem.addEventListener('input', function() {
            personagem.nome = this.value;
        });
    }
    
    const idade = document.getElementById('idade');
    if (idade) {
        idade.addEventListener('input', function() {
            personagem.detalhes.idade = parseInt(this.value) || 25;
        });
    }
    
    const altura = document.getElementById('altura');
    if (altura) {
        altura.addEventListener('input', function() {
            personagem.detalhes.altura = parseInt(this.value) || 175;
        });
    }
    
    const aparencia = document.getElementById('aparencia');
    if (aparencia) {
        aparencia.addEventListener('input', function() {
            personagem.detalhes.aparencia = this.value;
        });
    }
    
    const historia = document.getElementById('historia');
    if (historia) {
        historia.addEventListener('input', function() {
            personagem.detalhes.historia = this.value;
            const contador = document.getElementById('contador-historia');
            if (contador) {
                contador.textContent = this.value.length;
            }
        });
    }
    
    // Textareas da ficha
    const areaHacks = document.getElementById('area-hacks');
    if (areaHacks) {
        areaHacks.addEventListener('input', function() {
            personagem.hacks = this.value;
            salvarAutomaticamente();
        });
    }
    
    const areaInventario = document.getElementById('area-inventario');
    if (areaInventario) {
        areaInventario.addEventListener('input', function() {
            personagem.inventario = this.value;
            salvarAutomaticamente();
        });
    }
    
    const areaImplantes = document.getElementById('area-implantes');
    if (areaImplantes) {
        areaImplantes.addEventListener('input', function() {
            personagem.implantes = this.value;
            salvarAutomaticamente();
        });
    }
    
    // Controles de status (vida e energia)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-status')) {
            const btn = e.target.closest('.btn-status');
            const status = btn.getAttribute('data-status');
            const action = btn.getAttribute('data-action');
            alterarStatus(status, action);
        }
    });
    
    // Botões do inventário
    const btnAdicionarItem = document.getElementById('btn-adicionar-item');
    if (btnAdicionarItem) {
        btnAdicionarItem.addEventListener('click', adicionarItemInventario);
    }

    // Remoção inline de itens (delegação — o container é fixo)
    const inventarioContainer = document.getElementById('inventario-personalizado');
    if (inventarioContainer) {
        inventarioContainer.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn-remover-item-inline');
            if (!btn) return;
            const idx = parseInt(btn.getAttribute('data-index'), 10);
            removerItemInventario(idx);
        });
    }

    // ===== EVENTOS DA NUVEM =====
    const btnNuvem = document.getElementById('btn-nuvem');
    if (btnNuvem) btnNuvem.addEventListener('click', abrirModalNuvem);

    const btnSalvarMesa = document.getElementById('btn-salvar-mesa');
    if (btnSalvarMesa) btnSalvarMesa.addEventListener('click', definirMesa);

    const inputMesa = document.getElementById('input-mesa');
    if (inputMesa) {
        inputMesa.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') definirMesa();
        });
    }

    const btnNuvemSalvar = document.getElementById('btn-nuvem-salvar');
    if (btnNuvemSalvar) btnNuvemSalvar.addEventListener('click', () => salvarFichaNuvem(false));

    const btnNuvemEnviarLocais = document.getElementById('btn-nuvem-enviar-locais');
    if (btnNuvemEnviarLocais) btnNuvemEnviarLocais.addEventListener('click', enviarLocaisParaNuvem);

    // Abrir ficha da lista da nuvem (delegação)
    const nuvemLista = document.getElementById('nuvem-lista');
    if (nuvemLista) {
        nuvemLista.addEventListener('click', function(e) {
            const btn = e.target.closest('.nuvem-abrir');
            if (!btn) return;
            abrirFichaNuvem(btn.getAttribute('data-id'));
        });
    }

    // Compartilhar a própria ficha (jogador)
    const btnCompartilhar = document.getElementById('btn-compartilhar-ficha');
    if (btnCompartilhar) btnCompartilhar.addEventListener('click', compartilharMinhaFicha);

    // Lista de fichas compartilhadas (pegar / remover)
    const nuvemComp = document.getElementById('nuvem-compartilhadas');
    if (nuvemComp) {
        nuvemComp.addEventListener('click', function(e) {
            const pegar = e.target.closest('.comp-pegar');
            if (pegar) { pegarCompartilhada(pegar.getAttribute('data-id')); return; }
            const rem = e.target.closest('.comp-remover');
            if (rem) removerCompartilhada(rem.getAttribute('data-id'));
        });
    }

    // ===== EVENTOS DO PAINEL DO MESTRE =====
    const btnModoMestre = document.getElementById('btn-modo-mestre');
    if (btnModoMestre) btnModoMestre.addEventListener('click', abrirModalMestre);

    const btnMestreEntrar = document.getElementById('btn-mestre-entrar');
    if (btnMestreEntrar) btnMestreEntrar.addEventListener('click', entrarModoMestre);

    const mestreSenha = document.getElementById('mestre-senha');
    if (mestreSenha) mestreSenha.addEventListener('keypress', function(e) { if (e.key === 'Enter') entrarModoMestre(); });

    const btnSairMestre = document.getElementById('btn-sair-mestre');
    if (btnSairMestre) btnSairMestre.addEventListener('click', sairModoMestre);

    // Painel de notas
    const btnAddNota = document.getElementById('btn-add-nota');
    if (btnAddNota) btnAddNota.addEventListener('click', () => abrirModalNota(null));

    const btnSalvarNota = document.getElementById('btn-salvar-nota');
    if (btnSalvarNota) btnSalvarNota.addEventListener('click', salvarNota);

    const notasGrid = document.getElementById('mestre-notas-grid');
    if (notasGrid) {
        notasGrid.addEventListener('click', function(e) {
            const rm = e.target.closest('.nota-remover'); if (rm) { removerNota(rm.getAttribute('data-id')); return; }
            const ed = e.target.closest('.nota-editar'); if (ed) { abrirModalNota(ed.getAttribute('data-id')); return; }
            const card = e.target.closest('.nota-card'); if (card) abrirModalNota(card.getAttribute('data-id'));
        });
    }

    // NPCs
    const btnAddNpc = document.getElementById('btn-add-npc');
    if (btnAddNpc) btnAddNpc.addEventListener('click', () => abrirModalNpc(null));

    const btnSalvarNpc = document.getElementById('btn-salvar-npc');
    if (btnSalvarNpc) btnSalvarNpc.addEventListener('click', salvarNpc);

    const npcsGrid = document.getElementById('mestre-npcs');
    if (npcsGrid) {
        npcsGrid.addEventListener('click', function(e) {
            const ed = e.target.closest('.npc-editar'); if (ed) { abrirModalNpc(ed.getAttribute('data-id')); return; }
            const rm = e.target.closest('.npc-remover'); if (rm) { removerNpc(rm.getAttribute('data-id')); return; }
            const cb = e.target.closest('.npc-combate'); if (cb) { combateAdicionarNpc(cb.getAttribute('data-id')); return; }
            const hp = e.target.closest('[data-npcact="hp"]');
            if (hp) mestreNpcVida(hp.getAttribute('data-id'), parseInt(hp.getAttribute('data-delta'), 10));
        });
    }

    // Combate / iniciativa
    const btnCombJog = document.getElementById('btn-combate-jogadores');
    if (btnCombJog) btnCombJog.addEventListener('click', combateAdicionarJogadores);
    const btnCombProx = document.getElementById('btn-combate-proximo');
    if (btnCombProx) btnCombProx.addEventListener('click', combateProximo);
    const btnCombRod = document.getElementById('btn-combate-rodada');
    if (btnCombRod) btnCombRod.addEventListener('click', combateNovaRodada);
    const btnCombLimpar = document.getElementById('btn-combate-limpar');
    if (btnCombLimpar) btnCombLimpar.addEventListener('click', combateLimpar);

    const combateLista = document.getElementById('combate-lista');
    if (combateLista) {
        combateLista.addEventListener('click', function(e) {
            const el = e.target.closest('[data-cbt]');
            if (!el) return;
            const cbt = el.getAttribute('data-cbt');
            const cid = el.getAttribute('data-cid');
            if (cbt === 'ini') combateIni(cid, parseInt(el.getAttribute('data-delta'), 10));
            else if (cbt === 'agiu') combateAgiu(cid);
            else if (cbt === 'rem') combateRemover(cid);
        });
    }

    const btnVoltarPainel = document.getElementById('btn-voltar-painel');
    if (btnVoltarPainel) btnVoltarPainel.addEventListener('click', function() {
        mostrarTela('tela-mestre');
        escutarMesaMestre();
    });

    // Ações rápidas do mestre (delegação — o grid é fixo)
    const mestreGrid = document.getElementById('mestre-grid');
    if (mestreGrid) {
        mestreGrid.addEventListener('click', function(e) {
            const abrir = e.target.closest('.mestre-abrir');
            if (abrir) { mestreAbrirFicha(abrir.getAttribute('data-id')); return; }
            const enviar = e.target.closest('.mestre-enviar');
            if (enviar) { mestreEnviarCopia(enviar.getAttribute('data-id')); return; }
            const excluir = e.target.closest('.mestre-excluir');
            if (excluir) { mestreExcluirFicha(excluir.getAttribute('data-id')); return; }
            const el = e.target.closest('[data-act]');
            if (!el) return;
            const act = el.getAttribute('data-act');
            const id = el.getAttribute('data-id');
            if (act === 'vida' || act === 'energia') mestreAlterarStatus(id, act, parseInt(el.getAttribute('data-delta'), 10));
            else if (act === 'xp') mestreAlterarXP(id, parseInt(el.getAttribute('data-delta'), 10));
            else if (act === 'cond') mestreCondicao(id, el.getAttribute('data-med'), parseInt(el.getAttribute('data-i'), 10));
        });
    }

    // ===== EVENTOS DE PERSONALIZAÇÃO (COR + FOTO) =====
    const btnPersonalizar = document.getElementById('btn-personalizar');
    if (btnPersonalizar) btnPersonalizar.addEventListener('click', abrirModalPersonalizar);

    const corPicker = document.getElementById('cor-picker');
    if (corPicker) corPicker.addEventListener('input', function() { definirCorFicha(this.value); });

    const inputFoto = document.getElementById('input-foto');
    if (inputFoto) inputFoto.addEventListener('change', aoSelecionarFoto);

    const btnEscolherFoto = document.getElementById('btn-escolher-foto');
    if (btnEscolherFoto && inputFoto) btnEscolherFoto.addEventListener('click', () => inputFoto.click());

    const fotoPreview = document.getElementById('foto-preview');
    if (fotoPreview && inputFoto) fotoPreview.addEventListener('click', () => inputFoto.click());

    const btnRemoverFoto = document.getElementById('btn-remover-foto');
    if (btnRemoverFoto) btnRemoverFoto.addEventListener('click', removerFoto);

    // Cartão de ID: nome editável e clique na foto abre o seletor
    const idcardNome = document.getElementById('idcard-nome');
    if (idcardNome) idcardNome.addEventListener('input', aoEditarNomeIdCard);

    const idcardFoto = document.getElementById('idcard-foto');
    if (idcardFoto && inputFoto) idcardFoto.addEventListener('click', () => inputFoto.click());
    
    // ===== EVENTOS DOS MODAIS =====
    
    // Modais
    const modals = document.querySelectorAll('.modal');
    const modalBtns = document.querySelectorAll('.modal-close, .modal .btn-secundario');
    
    modalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modals.forEach(modal => modal.classList.remove('active'));
        });
    });
    
    // Fechar modal ao clicar fora
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
    
    // Modal de nível
    const btnAdicionarXP = document.getElementById('btn-adicionar-xp');
    if (btnAdicionarXP) {
        btnAdicionarXP.addEventListener('click', adicionarXP);
    }
    
    const inputXP = document.getElementById('input-xp');
    if (inputXP) {
        inputXP.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                adicionarXP();
            }
        });
    }
    
    const btnConfirmarNivel = document.getElementById('btn-confirmar-nivel');
    if (btnConfirmarNivel) {
        btnConfirmarNivel.addEventListener('click', confirmarSubirNivel);
    }
    
    const btnCancelarNivel = document.getElementById('btn-cancelar-nivel');
    if (btnCancelarNivel) {
        btnCancelarNivel.addEventListener('click', () => {
            document.getElementById('modal-nivel').classList.remove('active');
        });
    }
    
    // Modal de perícia
    const btnConfirmarPericia = document.getElementById('btn-confirmar-pericia');
    if (btnConfirmarPericia) {
        btnConfirmarPericia.addEventListener('click', confirmarPericiaExtra);
    }
    
    const btnCancelarPericia = document.getElementById('btn-cancelar-pericia');
    if (btnCancelarPericia) {
        btnCancelarPericia.addEventListener('click', () => {
            document.getElementById('modal-pericia').classList.remove('active');
            periciaExtraSelecionada = null;
        });
    }
}

// ===== FUNÇÕES DO GERENCIADOR DE FICHAS =====
function mostrarGerenciadorFichas() {
    const fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
    
    if (fichas.length === 0) {
        alert("Não há fichas salvas!");
        return;
    }
    
    // Atualiza a lista de fichas
    atualizarListaFichasInicio();
    
    // Mostra o modal
    const modal = document.getElementById('modal-fichas-inicio');
    const overlay = document.getElementById('overlay-fichas');
    
    if (modal && overlay) {
        modal.style.display = 'flex';
        overlay.style.display = 'block';
        
        // Forçar reflow para a animação funcionar
        modal.offsetHeight;
        overlay.offsetHeight;
        
        // Adicionar classes para ativar
        modal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function fecharGerenciadorFichas() {
    const modal = document.getElementById('modal-fichas-inicio');
    const overlay = document.getElementById('overlay-fichas');
    
    if (modal && overlay) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Esconde os elementos após a animação
        setTimeout(() => {
            modal.style.display = 'none';
            overlay.style.display = 'none';
            fichaSelecionadaId = null;
        }, 300);
    }
}

function atualizarListaFichasInicio() {
    const fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
    const listaContainer = document.getElementById('lista-fichas-inicio');
    
    if (!listaContainer) return;
    
    if (fichas.length === 0) {
        listaContainer.innerHTML = '<div class="nenhuma-ficha">Nenhuma ficha salva ainda.</div>';
        atualizarBotoesGerenciador();
        return;
    }
    
    listaContainer.innerHTML = '';
    
    fichas.forEach(ficha => {
        const div = document.createElement('div');
        div.className = `ficha-item-inicio ${fichaSelecionadaId === ficha.id ? 'selecionada' : ''}`;
        div.innerHTML = `
            <div class="ficha-info">
                <div class="ficha-nome">${ficha.personagem.nome || "Sem nome"}</div>
                <div class="ficha-detalhes">${ficha.personagem.classe?.nome || "Sem classe"} | Nível ${ficha.personagem.nivel || 1}</div>
            </div>
            <div class="ficha-data">
                <span>Salvo em: ${new Date(ficha.data).toLocaleDateString('pt-BR')}</span>
                <div class="selecionador-ficha"></div>
            </div>
        `;
        
        div.addEventListener('click', function(e) {
            // Não permitir seleção se clicou no seletor
            if (e.target.closest('.selecionador-ficha')) {
                return;
            }
            
            // Remove seleção anterior
            document.querySelectorAll('.ficha-item-inicio').forEach(item => {
                item.classList.remove('selecionada');
            });
            
            // Seleciona nova ficha
            div.classList.add('selecionada');
            fichaSelecionadaId = ficha.id;
            
            // Atualiza botões
            atualizarBotoesGerenciador();
        });
        
        // Clique duplo para carregar direto
        div.addEventListener('dblclick', function(e) {
            if (e.target.closest('.selecionador-ficha')) {
                return;
            }
            
            carregarFicha(ficha.id);
            fecharGerenciadorFichas();
        });
        
        listaContainer.appendChild(div);
    });
    
    atualizarBotoesGerenciador();
}

function atualizarBotoesGerenciador() {
    const fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
    const btnCarregarSelecionada = document.getElementById('btn-carregar-selecionada');
    const btnRemoverSelecionada = document.getElementById('btn-remover-selecionada');
    const btnRemoverTodas = document.getElementById('btn-remover-todas-fichas');
    
    if (fichas.length === 0) {
        if (btnCarregarSelecionada) btnCarregarSelecionada.style.display = 'none';
        if (btnRemoverSelecionada) btnRemoverSelecionada.style.display = 'none';
        if (btnRemoverTodas) btnRemoverTodas.style.display = 'none';
        return;
    }
    
    // Mostra botão de remover todas
    if (btnRemoverTodas) {
        btnRemoverTodas.style.display = 'inline-flex';
    }
    
    // Atualiza botões baseados na seleção
    if (fichaSelecionadaId) {
        if (btnCarregarSelecionada) {
            btnCarregarSelecionada.style.display = 'inline-flex';
            btnCarregarSelecionada.disabled = false;
        }
        if (btnRemoverSelecionada) {
            btnRemoverSelecionada.style.display = 'inline-flex';
            btnRemoverSelecionada.disabled = false;
        }
    } else {
        if (btnCarregarSelecionada) {
            btnCarregarSelecionada.style.display = 'none';
            btnCarregarSelecionada.disabled = true;
        }
        if (btnRemoverSelecionada) {
            btnRemoverSelecionada.style.display = 'none';
            btnRemoverSelecionada.disabled = true;
        }
    }
}

function removerFicha(idFicha) {
    let fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
    const fichaIndex = fichas.findIndex(f => f.id === idFicha);
    
    if (fichaIndex !== -1) {
        const fichaNome = fichas[fichaIndex].personagem.nome || "Ficha sem nome";
        fichas.splice(fichaIndex, 1);
        localStorage.setItem('neo-urbano-fichas', JSON.stringify(fichas));
        
        // Se a ficha removida era a atual, reseta
        if (fichaAtualId === idFicha) {
            resetarPersonagem();
        }
        
        alert(`Ficha "${fichaNome}" removida com sucesso!`);
        return true;
    }
    
    return false;
}

// ===== FUNÇÕES DE SELEÇÃO =====
function selecionarOrigem(nomeOrigem, elemento) {
    // Remove seleção anterior
    document.querySelectorAll('.origem-card').forEach(card => {
        card.classList.remove('selecionada');
    });
    
    // Seleciona nova origem
    elemento.classList.add('selecionada');
    personagem.origem = nomeOrigem;
    
    // Habilita botão próximo
    const btnProximo = document.getElementById('btn-proximo-origem');
    if (btnProximo) {
        btnProximo.disabled = false;
    }
}

function selecionarClasse(classe, elemento) {
    // Remove seleção anterior
    document.querySelectorAll('.classe-card').forEach(card => {
        card.classList.remove('selecionada');
    });
    
    // Seleciona nova classe
    elemento.classList.add('selecionada');
    personagem.classe = classe;
    
    // Mostra informações detalhadas
    const infoContainer = document.getElementById('info-classe');
    if (infoContainer) {
        infoContainer.style.display = 'block';
        infoContainer.innerHTML = `
            <h3><i class="fas ${classe.icone}"></i> ${classe.nome}</h3>
            <p><strong>Atributo-chave:</strong> ${classe.atributoChave}</p>
            <p>${classe.descricao}</p>
            <p><strong>Bônus inicial:</strong> +1 em ${classe.atributoChave}</p>
        `;
    }
    
    // Habilita botão próximo
    const btnProximo = document.getElementById('btn-proximo-classe');
    if (btnProximo) {
        btnProximo.disabled = false;
    }
}

function alterarAtributo(atributo, valor) {
    const novoValor = personagem.atributos[atributo] + valor;
    
    // Verifica limites
    if (novoValor < 1 || novoValor > 5) return;
    
    // Verifica se há pontos disponíveis
    if (valor > 0 && personagem.pontosAtributos <= 0) return;
    
    // Atualiza atributo
    personagem.atributos[atributo] = novoValor;
    personagem.pontosAtributos -= valor;
    
    // Atualiza interface
    const elementoValor = document.getElementById(`valor-${atributo}`);
    if (elementoValor) {
        elementoValor.textContent = novoValor;
    }
    
    // Atualiza botões
    const btnDim = document.getElementById(`btn-dim-${atributo}`);
    const btnAum = document.getElementById(`btn-aum-${atributo}`);
    
    if (btnDim) btnDim.disabled = novoValor <= 1;
    if (btnAum) btnAum.disabled = novoValor >= 5 || personagem.pontosAtributos <= 0;
    
    // Atualiza pontos restantes
    atualizarPontosRestantes();
}

function atualizarPontosRestantes() {
    const pontosRestantes = document.getElementById('pontos-restantes');
    if (pontosRestantes) {
        const pontosNumero = pontosRestantes.querySelector('.pontos-numero');
        if (pontosNumero) {
            pontosNumero.textContent = personagem.pontosAtributos;
        }
    }
    
    // Atualiza botão próximo
    const btnProximo = document.getElementById('btn-proximo-atributos');
    if (btnProximo) {
        btnProximo.disabled = personagem.pontosAtributos !== 0;
    }
}

function selecionarPericia(nomePericia, elemento) {
    const index = personagem.periciasEscolhidas.indexOf(nomePericia);
    
    if (index === -1) {
        // Adiciona se tiver menos de 3
        if (personagem.periciasEscolhidas.length < 3) {
            personagem.periciasEscolhidas.push(nomePericia);
            elemento.classList.add('selecionada');
        }
    } else {
        // Remove
        personagem.periciasEscolhidas.splice(index, 1);
        elemento.classList.remove('selecionada');
    }
    
    // Atualiza contador
    atualizarContadorPericias();
    
    // Atualiza botão próximo
    const btnProximo = document.getElementById('btn-proximo-pericias');
    if (btnProximo) {
        btnProximo.disabled = personagem.periciasEscolhidas.length !== 3;
    }
}

function atualizarContadorPericias() {
    const contador = document.getElementById('contador-pericias');
    if (contador) {
        contador.textContent = personagem.periciasEscolhidas.length;
    }
}

function selecionarPericiaExtra(nomePericia, elemento) {
    // Remove seleção anterior
    document.querySelectorAll('#lista-pericias-extra .pericia-item').forEach(item => {
        item.classList.remove('selecionada');
    });
    
    // Seleciona nova perícia
    elemento.classList.add('selecionada');
    periciaExtraSelecionada = nomePericia;
    
    // Habilita botão de confirmação
    const btnConfirmar = document.getElementById('btn-confirmar-pericia');
    if (btnConfirmar) {
        btnConfirmar.disabled = false;
    }
}

// ===== FUNÇÕES DA FICHA =====
function gerarFicha() {
    // Coleta dados do formulário
    const nome = document.getElementById('nome-personagem').value.trim();
    const idade = parseInt(document.getElementById('idade').value) || 25;
    const altura = parseInt(document.getElementById('altura').value) || 175;
    const aparencia = document.getElementById('aparencia').value.trim();
    const historia = document.getElementById('historia').value.trim();
    
    if (!nome) {
        alert("Por favor, digite um nome para o personagem!");
        return;
    }
    
    // Atualiza personagem
    personagem.nome = nome;
    personagem.detalhes.idade = idade;
    personagem.detalhes.altura = altura;
    personagem.detalhes.aparencia = aparencia;
    personagem.detalhes.historia = historia;
    personagem.dataCriacao = new Date();
    personagem.ultimaAtualizacao = new Date();
    
    // Calcula vida e energia máximas
    const vidaMax = 8 + (personagem.atributos.carne * 2);
    const energiaMax = 6 + (personagem.atributos.carne * 2);
    personagem.statusAtual.vida = vidaMax;
    personagem.statusAtual.energia = energiaMax;
    
    // Inicializa itens personalizados se não existirem
    if (!personagem.itensPersonalizados) {
        personagem.itensPersonalizados = [];
    }
    itensPersonalizados = personagem.itensPersonalizados;
    
    // Gera ID único
    fichaAtualId = 'ficha_' + Date.now();
    
    // Mostra tela da ficha
    mostrarTela('tela-ficha');
    
    // Atualiza ficha
    atualizarFicha();
}

function atualizarFicha() {
    console.log("Atualizando ficha...");

    // Aplica a cor personalizada da ficha (recolore todo o neon)
    aplicarCorFicha(personagem.cor);

    // Identificação (guardado: os campos podem não existir se o layout mudou)
    const elNome = document.getElementById('ficha-nome');
    if (elNome) elNome.textContent = personagem.nome || "---";
    const elClasse = document.getElementById('ficha-classe');
    if (elClasse) elClasse.textContent = personagem.classe ? personagem.classe.nome : "---";
    const elOrigem = document.getElementById('ficha-origem');
    if (elOrigem) elOrigem.textContent = personagem.origem || "---";
    const elNivel = document.getElementById('ficha-nivel');
    if (elNivel) elNivel.textContent = personagem.nivel;
    const elXp = document.getElementById('ficha-xp');
    if (elXp) elXp.textContent = personagem.xp;

    // Cartão de ID (topo)
    renderIdCard();

    // Data e ID
    const data = personagem.dataCriacao ? new Date(personagem.dataCriacao) : new Date();
    document.getElementById('ficha-data').textContent = data.toLocaleDateString('pt-BR');
    document.getElementById('ficha-id').textContent = fichaAtualId ? `ID: ${fichaAtualId}` : "ID: ------";
    
    // Status primários (CORREÇÃO PARA CALCULAR CORRETAMENTE)
    const vidaMax = 8 + (personagem.atributos.carne * 2);
    const energiaMax = 6 + (personagem.atributos.carne * 2);
    
    // Garante que vida e energia não excedam o máximo
    if (personagem.statusAtual.vida > vidaMax) {
        personagem.statusAtual.vida = vidaMax;
    }
    if (personagem.statusAtual.energia > energiaMax) {
        personagem.statusAtual.energia = energiaMax;
    }
    
    const vidaAtual = personagem.statusAtual.vida || vidaMax;
    const energiaAtual = personagem.statusAtual.energia || energiaMax;
    
    document.getElementById('vida-valor').textContent = `${vidaAtual}/${vidaMax}`;
    document.getElementById('vida-barra').style.width = `${(vidaAtual / vidaMax) * 100}%`;
    
    document.getElementById('energia-valor').textContent = `${energiaAtual}/${energiaMax}`;
    document.getElementById('energia-barra').style.width = `${(energiaAtual / energiaMax) * 100}%`;
    
    // Pontos de habilidade
    document.getElementById('pontos-habilidade').textContent = personagem.pontosAtributoDisponiveis;
    
    // Pontos disponíveis
    document.getElementById('pontos-atributo-restantes').textContent = personagem.pontosAtributoDisponiveis;
    document.getElementById('pericias-extra').textContent = personagem.periciasExtrasDisponiveis;
    
    // Atualiza botões
    const btnUsarPonto = document.getElementById('btn-usar-ponto-atributo');
    const btnEscolherPericia = document.getElementById('btn-escolher-pericia');
    
    if (btnUsarPonto) btnUsarPonto.disabled = personagem.pontosAtributoDisponiveis <= 0;
    if (btnEscolherPericia) btnEscolherPericia.disabled = personagem.periciasExtrasDisponiveis <= 0;
    
    // Atributos na ficha
    const atributosContainer = document.getElementById('atributos-ficha');
    if (atributosContainer) {
        atributosContainer.innerHTML = '';

        const atributos = listaAtributosBase();

        atributos.forEach(atrib => {
            const div = document.createElement('div');
            const disponivel = personagem.pontosAtributoDisponiveis > 0 && personagem.atributos[atrib.key] < 5;
            const selecionado = atributoSelecionado === atrib.key;
            
            div.className = `atributo-ficha ${disponivel ? 'disponivel' : ''} ${selecionado ? 'selecionado' : ''}`;
            div.setAttribute('data-atributo', atrib.key);
            
            div.innerHTML = `
                ${disponivel ? '<div class="atributo-indicador"><i class="fas fa-plus-circle"></i></div>' : ''}
                <div class="atributo-ficha-nome">
                    <i class="fas ${atrib.icone}"></i> ${atrib.nome}
                </div>
                <div class="atributo-ficha-valor">${personagem.atributos[atrib.key]}</div>
            `;
            
            if (disponivel) {
                div.addEventListener('click', () => selecionarAtributoParaMelhorar(atrib.key, div));
            }
            
            atributosContainer.appendChild(div);
        });
    }
    
    // Perícias na ficha
    const periciasContainer = document.getElementById('pericias-ficha');
    if (periciasContainer) {
        periciasContainer.innerHTML = '';
        
        const todasPericias = [...new Set([...dadosSistema.pericias, ...personagem.periciasEscolhidas])].sort();
        
        todasPericias.forEach(pericia => {
            const div = document.createElement('div');
            div.className = 'pericia-ficha-item';
            
            const ehEscolhida = personagem.periciasEscolhidas.includes(pericia);
            
            div.innerHTML = `
                <div class="pericia-ficha-nome">
                    ${ehEscolhida ? '<i class="fas fa-check destaque-azul"></i>' : '<i class="fas fa-minus"></i>'}
                    ${pericia}
                </div>
                <div class="pericia-ficha-bonus">
                    ${ehEscolhida ? '+2' : '+0'}
                </div>
            `;
            
            periciasContainer.appendChild(div);
        });
    }
    
    // Detalhes pessoais
    document.getElementById('detalhe-idade').textContent = personagem.detalhes.idade || "--";
    document.getElementById('detalhe-altura').textContent = personagem.detalhes.altura ? `${personagem.detalhes.altura} cm` : "-- cm";
    document.getElementById('detalhe-aparencia').textContent = personagem.detalhes.aparencia || "--";
    document.getElementById('detalhe-historia').textContent = personagem.detalhes.historia || "--";
    
    // Textareas
    const areaHacks = document.getElementById('area-hacks');
    if (areaHacks) areaHacks.value = personagem.hacks || "";
    
    const areaInventario = document.getElementById('area-inventario');
    if (areaInventario) areaInventario.value = personagem.inventario || "";
    
    const areaImplantes = document.getElementById('area-implantes');
    if (areaImplantes) areaImplantes.value = personagem.implantes || "";
    
    // Atualiza inventário personalizado
    atualizarInventarioPersonalizado();
    
    // Atualiza habilidades resumo
    atualizarHabilidadesResumo();

    // Sincroniza estado das árvores (card + modal) e o contador do modal
    sincronizarArvores();
    const arvoreModalPontos = document.getElementById('arvore-modal-pontos');
    if (arvoreModalPontos) arvoreModalPontos.textContent = personagem.pontosAtributoDisponiveis;

    // Atualiza maestrias de armas
    renderMaestrias();

    // Atualiza corpo / implantes
    renderCorpoImplantes();

    // Atualiza quadradinhos
    atualizarQuadradinhos();
    
    // Atualiza lista de fichas salvas na ficha
    atualizarListaFichasSalvas();
    
    console.log(`Ficha atualizada - Nível: ${personagem.nivel}, XP: ${personagem.xp}/${personagem.xpProximoNivel}`);
}

function atualizarQuadradinhos() {
    const medidores = ['ferimentos', 'estresse', 'exposicao', 'fome', 'sede', 'sono', 'higiene', 'alcool', 'cigarro', 'drogas'];
    
    medidores.forEach(medidor => {
        const container = document.getElementById(`quad-${medidor}`);
        if (container) {
            const arr = (personagem.medidores && personagem.medidores[medidor]) || [];
            const quadrados = container.querySelectorAll('.quadrado');
            quadrados.forEach((quadrado, index) => {
                if (arr[index]) {
                    quadrado.classList.add('preenchido');
                    if (medidor === 'ferimentos') {
                        quadrado.classList.add('dano');
                    }
                } else {
                    quadrado.classList.remove('preenchido');
                    if (medidor === 'ferimentos') {
                        quadrado.classList.remove('dano');
                    }
                }
            });
        }
    });
}

function atualizarInventarioPersonalizado() {
    const container = document.getElementById('inventario-personalizado');
    if (!container) return;

    container.innerHTML = '';

    if (itensPersonalizados.length === 0) {
        container.innerHTML = '<div class="inventario-vazio">Nenhum item no inventário ainda.</div>';
        return;
    }

    itensPersonalizados.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'inventario-item personalizado';
        div.setAttribute('data-index', index);
        div.innerHTML = `
            <span class="inventario-item-nome"><i class="fas fa-box"></i> ${escaparHTML(item)}</span>
            <button class="btn-remover-item-inline" data-index="${index}" title="Remover item" aria-label="Remover item"><i class="fas fa-times"></i></button>
        `;
        container.appendChild(div);
    });
}

function removerItemInventario(index) {
    const item = itensPersonalizados[index];
    if (item === undefined) return;
    if (confirm(`Remover item "${item}"?`)) {
        itensPersonalizados.splice(index, 1);
        personagem.itensPersonalizados = itensPersonalizados;
        atualizarInventarioPersonalizado();
        salvarAutomaticamente();
    }
}

function atualizarListaFichasSalvas() {
    const container = document.getElementById('lista-fichas-salvas');
    if (!container) return;
    
    const fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
    
    if (fichas.length === 0) {
        container.innerHTML = '<div class="nenhuma-ficha">Nenhuma ficha salva ainda.</div>';
        return;
    }
    
    container.innerHTML = '';
    
    fichas.forEach(ficha => {
        const div = document.createElement('div');
        div.className = 'ficha-salva-item';
        div.innerHTML = `
            <div class="ficha-salva-nome">${ficha.personagem.nome || "Sem nome"}</div>
            <div class="ficha-salva-detalhes">
                ${ficha.personagem.classe?.nome || "Sem classe"} | Nível ${ficha.personagem.nivel || 1}
                <div class="ficha-salva-data">${new Date(ficha.data).toLocaleDateString('pt-BR')}</div>
            </div>
        `;
        
        div.addEventListener('click', function() {
            carregarFicha(ficha.id);
        });
        
        container.appendChild(div);
    });
}

function atualizarUltimaAtualizacao() {
    const elemento = document.getElementById('ultima-atualizacao');
    if (elemento) {
        const agora = new Date();
        elemento.textContent = agora.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        });
    }
}

// ===== FUNÇÕES DE CONTROLE =====
function alterarStatus(status, action) {
    // Vida/Energia também só o MESTRE altera (dano/cura). Jogador vê ao vivo.
    if (!modoMestre) return;

    const vidaMax = 8 + (personagem.atributos.carne * 2);
    const energiaMax = 6 + (personagem.atributos.carne * 2);
    
    if (status === 'vida') {
        if (action === 'aumentar' && personagem.statusAtual.vida < vidaMax) {
            personagem.statusAtual.vida++;
        } else if (action === 'diminuir' && personagem.statusAtual.vida > 0) {
            personagem.statusAtual.vida--;
        }
        
        document.getElementById('vida-valor').textContent = `${personagem.statusAtual.vida}/${vidaMax}`;
        document.getElementById('vida-barra').style.width = `${(personagem.statusAtual.vida / vidaMax) * 100}%`;
    }
    
    if (status === 'energia') {
        if (action === 'aumentar' && personagem.statusAtual.energia < energiaMax) {
            personagem.statusAtual.energia++;
        } else if (action === 'diminuir' && personagem.statusAtual.energia > 0) {
            personagem.statusAtual.energia--;
        }
        
        document.getElementById('energia-valor').textContent = `${personagem.statusAtual.energia}/${energiaMax}`;
        document.getElementById('energia-barra').style.width = `${(personagem.statusAtual.energia / energiaMax) * 100}%`;
    }

    // Atualiza também as barras HUD do cartão de ID
    renderBarrasHud();

    salvarAutomaticamente();
}

function selecionarAtributoParaMelhorar(atributo, elemento) {
    // Remove seleção anterior
    document.querySelectorAll('.atributo-ficha').forEach(item => {
        item.classList.remove('selecionado');
    });
    
    // Seleciona novo atributo
    elemento.classList.add('selecionado');
    atributoSelecionado = atributo;
    
    // Habilita botão de usar ponto
    const btnUsarPonto = document.getElementById('btn-usar-ponto-atributo');
    if (btnUsarPonto) {
        btnUsarPonto.disabled = false;
    }
}

function usarPontoAtributo() {
    if (!atributoSelecionado || personagem.pontosAtributoDisponiveis <= 0) {
        alert("Selecione um atributo primeiro ou não há pontos disponíveis!");
        return;
    }
    
    if (personagem.atributos[atributoSelecionado] >= 5) {
        alert("Este atributo já está no máximo!");
        return;
    }
    
    // Melhora atributo
    personagem.atributos[atributoSelecionado]++;
    personagem.pontosAtributoDisponiveis--;
    
    // Recalcula vida e energia
    const vidaMax = 8 + (personagem.atributos.carne * 2);
    const energiaMax = 6 + (personagem.atributos.carne * 2);
    
    // Ajusta vida atual se necessário
    if (personagem.statusAtual.vida > vidaMax) {
        personagem.statusAtual.vida = vidaMax;
    }
    
    // Ajusta energia atual se necessário
    if (personagem.statusAtual.energia > energiaMax) {
        personagem.statusAtual.energia = energiaMax;
    }
    
    // Atualiza interface
    atualizarFicha();
    salvarAutomaticamente();
    
    // Limpa seleção
    atributoSelecionado = null;
    document.querySelectorAll('.atributo-ficha').forEach(item => {
        item.classList.remove('selecionado');
    });
    
    document.getElementById('btn-usar-ponto-atributo').disabled = true;
}

// ===== FUNÇÕES DE INVENTÁRIO =====
function adicionarItemInventario() {
    const item = prompt("Digite o nome do item a ser adicionado:");
    
    if (item && item.trim()) {
        itensPersonalizados.push(item.trim());
        personagem.itensPersonalizados = itensPersonalizados;
        atualizarInventarioPersonalizado();
        salvarAutomaticamente();
    }
}


// ===== FUNÇÕES DE NÍVEL E EXPERIÊNCIA =====
function mostrarModalNivel() {
    const modal = document.getElementById('modal-nivel');
    if (!modal) return;
    
    // Preenche dados
    document.getElementById('modal-nivel-atual').textContent = personagem.nivel;
    document.getElementById('modal-nivel-proximo').textContent = personagem.nivel + 1;
    document.getElementById('modal-nivel-confirmar').textContent = personagem.nivel + 1;
    document.getElementById('modal-xp-atual').textContent = personagem.xp;
    document.getElementById('modal-xp-proximo').textContent = personagem.xpProximoNivel;
    
    // Mostra benefício de perícia extra a cada 2 níveis
    const proximoNivelPar = (personagem.nivel + 1) % 2 === 0;
    const beneficioPericia = document.getElementById('beneficio-pericia');
    if (beneficioPericia) {
        beneficioPericia.style.display = proximoNivelPar ? 'block' : 'none';
    }
    
    // Desabilita botão de confirmar se não tem XP suficiente
    const btnConfirmar = document.getElementById('btn-confirmar-nivel');
    if (btnConfirmar) {
        btnConfirmar.disabled = personagem.xp < personagem.xpProximoNivel;
    }
    
    modal.classList.add('active');
}

function adicionarXP() {
    const input = document.getElementById('input-xp');
    if (!input) return;
    
    const xpAdicional = parseInt(input.value) || 0;
    
    if (xpAdicional <= 0) {
        alert("Digite um valor válido de XP!");
        return;
    }
    
    // Adiciona XP
    personagem.xp += xpAdicional;
    
    // Verifica se pode subir de nível
    let subiuNivel = false;
    while (personagem.xp >= personagem.xpProximoNivel) {
        // Subir de nível
        personagem.nivel++;
        personagem.pontosAtributoDisponiveis++;
        
        // Perícia extra a cada 2 níveis
        if (personagem.nivel % 2 === 0) {
            personagem.periciasExtrasDisponiveis++;
        }
        
        // Subtrai o XP gasto do nível anterior
        personagem.xp -= personagem.xpProximoNivel;
        
        // Aumenta XP necessário para próximo nível
        const xpAntigo = personagem.xpProximoNivel;
        personagem.xpProximoNivel = Math.floor(personagem.xpProximoNivel * 1.5);
        
        subiuNivel = true;
        
        console.log(`Subiu para nível ${personagem.nivel}! XP resetado. XP restante: ${personagem.xp}, Próximo nível: ${personagem.xpProximoNivel}`);
    }
    
    // Atualiza interface
    atualizarFicha();
    
    // Se subiu de nível, mostra mensagem
    if (subiuNivel) {
        alert(`Parabéns! Você subiu para o nível ${personagem.nivel}!`);
    }
    
    // Atualiza o modal se estiver aberto
    const modal = document.getElementById('modal-nivel');
    if (modal && modal.classList.contains('active')) {
        mostrarModalNivel();
    }
    
    // Limpa input
    input.value = '';
    
    salvarAutomaticamente();
}

function confirmarSubirNivel() {
    if (personagem.xp < personagem.xpProximoNivel) {
        alert("XP insuficiente para subir de nível!");
        return;
    }
    
    // Sobe de nível
    personagem.nivel++;
    personagem.pontosAtributoDisponiveis++;
    
    // Perícia extra a cada 2 níveis
    if (personagem.nivel % 2 === 0) {
        personagem.periciasExtrasDisponiveis++;
    }
    
    // Subtrai o XP gasto do nível anterior
    personagem.xp -= personagem.xpProximoNivel;
    
    // Aumenta XP necessário para próximo nível
    const xpAntigo = personagem.xpProximoNivel;
    personagem.xpProximoNivel = Math.floor(personagem.xpProximoNivel * 1.5);
    
    console.log(`Subiu para nível ${personagem.nivel}! XP gasto: ${xpAntigo}, XP restante: ${personagem.xp}, Próximo nível: ${personagem.xpProximoNivel}`);
    
    // Fecha modal
    document.getElementById('modal-nivel').classList.remove('active');
    
    // Atualiza ficha
    atualizarFicha();
    salvarAutomaticamente();
    
    alert(`Parabéns! Você subiu para o nível ${personagem.nivel}!`);
}

// ===== FUNÇÕES DE PERÍCIAS EXTRAS =====
function mostrarModalPericia() {
    if (personagem.periciasExtrasDisponiveis <= 0) {
        alert("Você não tem perícias extras disponíveis!");
        return;
    }
    
    const modal = document.getElementById('modal-pericia');
    if (!modal) return;
    
    // Atualiza contador
    document.getElementById('modal-pericias-disponiveis').textContent = personagem.periciasExtrasDisponiveis;
    
    // Limpa seleção anterior
    document.querySelectorAll('#lista-pericias-extra .pericia-item').forEach(item => {
        item.classList.remove('selecionada');
    });
    periciaExtraSelecionada = null;
    
    // Desabilita botão de confirmar
    document.getElementById('btn-confirmar-pericia').disabled = true;
    
    modal.classList.add('active');
}

function confirmarPericiaExtra() {
    if (!periciaExtraSelecionada || personagem.periciasExtrasDisponiveis <= 0) {
        alert("Selecione uma perícia primeiro!");
        return;
    }
    
    // Adiciona perícia
    if (!personagem.periciasEscolhidas.includes(periciaExtraSelecionada)) {
        personagem.periciasEscolhidas.push(periciaExtraSelecionada);
    }
    
    personagem.periciasExtrasDisponiveis--;
    
    // Fecha modal
    document.getElementById('modal-pericia').classList.remove('active');
    
    // Atualiza ficha
    atualizarFicha();
    salvarAutomaticamente();
    
    alert(`Perícia "${periciaExtraSelecionada}" adquirida com sucesso!`);
}

// ===== FUNÇÕES DE SALVAR E CARREGAR =====
function salvarFicha() {
    if (!personagem.nome) {
        alert("O personagem precisa ter um nome para ser salvo!");
        return;
    }
    
    // Atualiza data de atualização
    personagem.ultimaAtualizacao = new Date();
    
    // Prepara ficha para salvar
    const fichaParaSalvar = {
        id: fichaAtualId || 'ficha_' + Date.now(),
        personagem: JSON.parse(JSON.stringify(personagem)), // Cópia profunda
        data: new Date().toISOString()
    };
    
    // Carrega fichas existentes
    let fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
    
    // Verifica se já existe uma ficha com o mesmo ID
    const indexExistente = fichas.findIndex(f => f.id === fichaParaSalvar.id);
    
    if (indexExistente !== -1) {
        // Atualiza ficha existente
        fichas[indexExistente] = fichaParaSalvar;
        alert(`Ficha "${personagem.nome}" atualizada com sucesso!`);
    } else {
        // Adiciona nova ficha
        fichas.push(fichaParaSalvar);
        alert(`Ficha "${personagem.nome}" salva com sucesso!`);
        
        // Atualiza ID atual se não existia
        fichaAtualId = fichaParaSalvar.id;
    }
    
    // Salva no localStorage
    localStorage.setItem('neo-urbano-fichas', JSON.stringify(fichas));

    // Atualiza contador e listas
    atualizarContadorFichas();
    atualizarListaFichasInicio();
    atualizarListaFichasSalvas();

    // Também envia para a nuvem, se ativa (sincronização ao vivo)
    agendarPushNuvem();
}

function carregarFichasSalvas() {
    const fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
    return fichas;
}

// Normaliza/migra o personagem global após um Object.assign de dados carregados
// (usado tanto pelo carregamento local quanto pelo da nuvem).
function normalizarPersonagemCarregado() {
    if (!personagem.periciasEscolhidas) personagem.periciasEscolhidas = [];
    if (!personagem.habilidadesAdquiridas) personagem.habilidadesAdquiridas = [];
    if (!personagem.itensPersonalizados) personagem.itensPersonalizados = [];

    // Migração de atributos antigos (malandragem/labia/recurso -> manha/proza/rede + intuicao)
    if (personagem.atributos) {
        const a = personagem.atributos;
        if (a.manha === undefined && a.malandragem !== undefined) a.manha = a.malandragem;
        if (a.proza === undefined && a.labia !== undefined) a.proza = a.labia;
        if (a.rede === undefined && a.recurso !== undefined) a.rede = a.recurso;
        ['carne', 'intuicao', 'foco', 'manha', 'proza', 'rede'].forEach(k => {
            if (a[k] === undefined) a[k] = 1;
        });
        delete a.malandragem; delete a.labia; delete a.recurso;
    }

    // Garante maestrias e implantes do corpo (fichas antigas não têm)
    if (!personagem.maestrias) {
        personagem.maestrias = maestriasPadrao();
    } else {
        const base = maestriasPadrao();
        Object.keys(base).forEach(k => { if (personagem.maestrias[k] === undefined) personagem.maestrias[k] = 0; });
    }
    if (!personagem.implantesCorpo) personagem.implantesCorpo = implantesCorpoPadrao();
    else {
        const baseC = implantesCorpoPadrao();
        Object.keys(baseC).forEach(k => { if (!Array.isArray(personagem.implantesCorpo[k])) personagem.implantesCorpo[k] = []; });
    }

    if (!personagem.medidores) {
        personagem.medidores = {
            ferimentos: Array(6).fill(false),
            estresse: Array(6).fill(false),
            exposicao: Array(6).fill(false),
            fome: Array(6).fill(false),
            sede: Array(6).fill(false),
            sono: Array(6).fill(false),
            higiene: Array(6).fill(false),
            alcool: Array(6).fill(false),
            cigarro: Array(6).fill(false),
            drogas: Array(6).fill(false)
        };
    }

    if (!personagem.cor) personagem.cor = COR_PADRAO;
    if (personagem.foto === undefined) personagem.foto = "";

    regiaoCorpoSelecionada = null;
    itensPersonalizados = personagem.itensPersonalizados || [];
}

// Aplica um objeto de personagem (de qualquer origem) na ficha e a exibe.
function aplicarFichaCarregada(personagemData, id) {
    fichaAtualId = id;
    Object.assign(personagem, personagemData);
    normalizarPersonagemCarregado();
    mostrarTela('tela-ficha');
    atualizarFicha();
    // Reassina o sync ao vivo (ex.: jogador que recarregou e carregou a ficha local).
    // assinarFichaAoVivo só age se a nuvem estiver ativa e a mesa definida.
    assinarFichaAoVivo(id);
}

function carregarFicha(idFicha) {
    const fichas = carregarFichasSalvas();
    const ficha = fichas.find(f => f.id === idFicha);

    if (!ficha) {
        alert("Ficha não encontrada!");
        return false;
    }

    aplicarFichaCarregada(ficha.personagem, ficha.id);
    alert(`Ficha "${personagem.nome}" carregada com sucesso!`);
    return true;
}

function salvarAutomaticamente() {
    // Salva automaticamente se já tem um ID
    if (fichaAtualId && personagem.nome) {
        personagem.ultimaAtualizacao = new Date();
        
        let fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
        const index = fichas.findIndex(f => f.id === fichaAtualId);
        
        const fichaParaSalvar = {
            id: fichaAtualId,
            personagem: JSON.parse(JSON.stringify(personagem)),
            data: fichas[index]?.data || new Date().toISOString()
        };
        
        if (index !== -1) {
            fichas[index] = fichaParaSalvar;
        } else {
            fichas.push(fichaParaSalvar);
        }
        
        localStorage.setItem('neo-urbano-fichas', JSON.stringify(fichas));

        // Atualiza contador
        atualizarContadorFichas();

        // Sincroniza com a nuvem (debounced), se ativa
        agendarPushNuvem();
    }
}

// ===== FUNÇÕES AUXILIARES =====
function atualizarContadorFichas() {
    const fichas = carregarFichasSalvas();
    const contador = document.getElementById('contador-fichas');
    if (contador) {
        contador.textContent = fichas.length;
    }
}

function resetarPersonagem() {
    personagem = {
        nome: "",
        origem: "",
        classe: null,
        nivel: 1,
        xp: 0,
        xpProximoNivel: 100,
        pontosAtributoDisponiveis: 0,
        periciasExtrasDisponiveis: 0,
        atributos: {
            carne: 1,
            intuicao: 1,
            foco: 1,
            manha: 1,
            proza: 1,
            rede: 1
        },
        periciasEscolhidas: [],
        habilidadesAdquiridas: [],
        pontosAtributos: 7,
        maestrias: maestriasPadrao(),
        detalhes: {
            idade: 25,
            altura: 175,
            aparencia: "",
            historia: ""
        },
        hacks: "",
        inventario: "",
        itensPersonalizados: [],
        implantes: "",
        implantesCorpo: implantesCorpoPadrao(),
        cor: COR_PADRAO,
        foto: "",
        medidores: {
            ferimentos: Array(6).fill(false),
            estresse: Array(6).fill(false),
            exposicao: Array(6).fill(false),
            fome: Array(6).fill(false),
            sede: Array(6).fill(false),
            sono: Array(6).fill(false),
            higiene: Array(6).fill(false),
            alcool: Array(6).fill(false),
            cigarro: Array(6).fill(false),
            drogas: Array(6).fill(false)
        },
        statusAtual: {
            vida: 10,
            energia: 8
        },
        dataCriacao: null,
        ultimaAtualizacao: null
    };
    
    fichaAtualId = null;
    atributoSelecionado = null;
    itensPersonalizados = [];
    regiaoCorpoSelecionada = null;
    
    // Limpa campos do formulário
    const nomePersonagem = document.getElementById('nome-personagem');
    if (nomePersonagem) nomePersonagem.value = "";
    
    const idade = document.getElementById('idade');
    if (idade) idade.value = "25";
    
    const altura = document.getElementById('altura');
    if (altura) altura.value = "175";
    
    const aparencia = document.getElementById('aparencia');
    if (aparencia) aparencia.value = "";
    
    const historia = document.getElementById('historia');
    if (historia) historia.value = "";
    
    // Limpa seleções
    document.querySelectorAll('.origem-card, .classe-card, .pericia-item').forEach(el => {
        el.classList.remove('selecionada');
    });
    
    // Reseta valores dos atributos
    document.querySelectorAll('[id^="valor-"]').forEach(el => {
        el.textContent = "1";
    });
    
    // Atualiza pontos
    atualizarPontosRestantes();
    atualizarContadorPericias();

    // Reseta a cor da ficha para o padrão
    aplicarCorFicha(COR_PADRAO);

    console.log("Personagem resetado!");
}

// =====================================================================
// ===== PERSONALIZAÇÃO (COR + FOTO) + CARTÃO DE ID + BOOT ==============
// =====================================================================

function inicializarPersonalizacao() {
    // Monta os swatches de temas no modal
    const cont = document.getElementById('cor-temas');
    if (cont) {
        cont.innerHTML = '';
        temasFicha.forEach(t => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'cor-swatch';
            b.style.background = t.cor;
            b.title = t.nome;
            b.setAttribute('data-cor', t.cor.toLowerCase());
            b.addEventListener('click', () => definirCorFicha(t.cor));
            cont.appendChild(b);
        });
    }
    // Aplica o padrão de saída
    aplicarCorFicha(COR_PADRAO);
}

function abrirModalPersonalizar() {
    const modal = document.getElementById('modal-personalizar');
    if (!modal) return;
    const picker = document.getElementById('cor-picker');
    if (picker) picker.value = personagem.cor || COR_PADRAO;
    atualizarSwatchAtivo();
    renderPreviewFoto();
    modal.classList.add('active');
}

function definirCorFicha(cor) {
    personagem.cor = cor || COR_PADRAO;
    aplicarCorFicha(personagem.cor);
    const picker = document.getElementById('cor-picker');
    if (picker) picker.value = personagem.cor;
    atualizarSwatchAtivo();
    salvarAutomaticamente();
}

function atualizarSwatchAtivo() {
    const atual = String(personagem.cor || COR_PADRAO).toLowerCase();
    document.querySelectorAll('.cor-swatch').forEach(s => {
        s.classList.toggle('ativo', (s.getAttribute('data-cor') || '') === atual);
    });
}

// ----- FOTO -----
function aoSelecionarFoto(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { alert('Selecione um arquivo de imagem.'); return; }
    const reader = new FileReader();
    reader.onload = ev => redimensionarFoto(ev.target.result);
    reader.readAsDataURL(file);
    e.target.value = ''; // permite re-selecionar o mesmo arquivo
}

// Redimensiona a imagem (max 420px, JPEG) para caber no localStorage e no Firestore (<1MB)
function redimensionarFoto(dataUrl) {
    const img = new Image();
    img.onload = function () {
        const MAX = 420;
        let w = img.width, h = img.height;
        const escala = Math.min(1, MAX / Math.max(w, h));
        w = Math.round(w * escala);
        h = Math.round(h * escala);
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        personagem.foto = canvas.toDataURL('image/jpeg', 0.82);
        renderFotoFicha();
        renderPreviewFoto();
        salvarAutomaticamente();
    };
    img.onerror = () => alert('Não consegui ler essa imagem.');
    img.src = dataUrl;
}

function removerFoto() {
    personagem.foto = '';
    renderFotoFicha();
    renderPreviewFoto();
    salvarAutomaticamente();
}

function renderPreviewFoto() {
    const prev = document.getElementById('foto-preview');
    const btnRem = document.getElementById('btn-remover-foto');
    if (prev) {
        if (personagem.foto) {
            prev.style.backgroundImage = `url(${personagem.foto})`;
            prev.classList.add('tem-foto');
            prev.innerHTML = '';
        } else {
            prev.style.backgroundImage = 'none';
            prev.classList.remove('tem-foto');
            prev.innerHTML = '<i class="fas fa-user"></i>';
        }
    }
    if (btnRem) btnRem.style.display = personagem.foto ? 'inline-flex' : 'none';
}

// ----- CARTÃO DE ID -----
function renderFotoFicha() {
    const av = document.getElementById('idcard-foto');
    if (!av) return;
    if (personagem.foto) {
        av.style.backgroundImage = `url(${personagem.foto})`;
        av.classList.add('tem-foto');
        av.innerHTML = '';
    } else {
        av.style.backgroundImage = 'none';
        av.classList.remove('tem-foto');
        av.innerHTML = '<i class="fas fa-user-astronaut"></i>';
    }
}

function renderIdCard() {
    const nome = document.getElementById('idcard-nome');
    if (nome && document.activeElement !== nome) nome.value = personagem.nome || '';

    const classeNome = document.getElementById('idcard-classe');
    if (classeNome) classeNome.textContent = personagem.classe ? personagem.classe.nome : '—';

    const emblema = document.getElementById('idcard-emblema');
    if (emblema) emblema.innerHTML = personagem.classe
        ? `<i class="fas ${personagem.classe.icone}"></i>`
        : '<i class="fas fa-user-secret"></i>';

    const origem = document.getElementById('idcard-origem');
    if (origem) origem.textContent = personagem.origem || '—';

    const nivel = document.getElementById('idcard-nivel');
    if (nivel) nivel.textContent = personagem.nivel || 1;

    const xp = document.getElementById('idcard-xp');
    if (xp) xp.textContent = `${personagem.xp || 0}/${personagem.xpProximoNivel || 100}`;

    renderFotoFicha();
    renderBarrasHud();
}

function renderBarrasHud() {
    if (!personagem.atributos) return;
    const vidaMax = 8 + (personagem.atributos.carne * 2);
    const energiaMax = 6 + (personagem.atributos.carne * 2);
    const vida = Math.max(0, Math.min(personagem.statusAtual.vida, vidaMax));
    const energia = Math.max(0, Math.min(personagem.statusAtual.energia, energiaMax));
    setBarraHud('hud-vida', vida, vidaMax);
    setBarraHud('hud-energia', energia, energiaMax);
}

function setBarraHud(prefixo, atual, max) {
    const fill = document.getElementById(prefixo + '-fill');
    const txt = document.getElementById(prefixo + '-txt');
    const wrap = document.getElementById(prefixo + '-wrap');
    const pct = max > 0 ? (atual / max) * 100 : 0;
    if (fill) fill.style.width = pct + '%';
    if (txt) txt.textContent = `${atual}/${max}`;
    if (wrap) wrap.classList.toggle('critico', pct <= 25);
}

// Edição inline do nome no cartão de ID
function aoEditarNomeIdCard(e) {
    personagem.nome = e.target.value;
    const fichaNome = document.getElementById('ficha-nome');
    if (fichaNome) fichaNome.textContent = personagem.nome || '---';
    salvarAutomaticamente();
}

// ----- BOOT / TERMINAL -----
function rodarBoot() {
    const overlay = document.getElementById('boot-overlay');
    if (!overlay) return;
    overlay.classList.remove('escondido');
    overlay.classList.add('ativo');
    clearTimeout(window.__bootTimer);
    window.__bootTimer = setTimeout(() => {
        overlay.classList.remove('ativo');
        overlay.classList.add('escondido');
    }, 1500);
}

// ----- BOOT DE TERMINAL DA TELA INICIAL -----
let introBootRodou = false;

function novaLinhaTerminal(corpo) {
    const d = document.createElement('div');
    d.className = 'term-linha';
    corpo.appendChild(d);
    return d;
}

function runIntroBoot() {
    const corpo = document.getElementById('terminal-corpo');
    const menu = document.getElementById('intro-menu');
    const boot = document.getElementById('intro-boot');
    const skip = document.getElementById('terminal-skip');
    if (!corpo || !menu) return;

    introBootRodou = true;

    const linhas = [
        'NET-OS 2053 :: inicializando neuro-link',
        'conectando ao backbone............ [OK]',
        'montando sistema de fichas........ [OK]',
        'descriptografando protocolos...... [OK]',
        'ACESSO CONCEDIDO — bem-vindo, operador.'
    ];

    let li = 0, ci = 0, cancelado = false;
    corpo.innerHTML = '';
    let atual = novaLinhaTerminal(corpo);

    function revelar() {
        cancelado = true;
        if (skip) skip.style.display = 'none';
        const terminal = document.querySelector('#intro-boot .terminal');
        if (terminal && !terminal.classList.contains('terminal-oculto')) {
            // o terminal sai de cena; o menu aparece no espaço liberado
            terminal.classList.add('terminal-saindo');
            setTimeout(() => {
                terminal.classList.add('terminal-oculto');
                menu.classList.add('revelado');
            }, 480);
        } else {
            menu.classList.add('revelado');
        }
    }

    if (boot) {
        boot.addEventListener('click', function () {
            if (!menu.classList.contains('revelado')) revelar();
        });
    }

    function tick() {
        if (cancelado) return;
        if (li >= linhas.length) { revelar(); return; }
        const linha = linhas[li];
        if (ci < linha.length) {
            atual.textContent = '> ' + linha.slice(0, ci + 1);
            ci++;
            setTimeout(tick, 16);
        } else {
            li++; ci = 0;
            if (li < linhas.length) atual = novaLinhaTerminal(corpo);
            setTimeout(tick, 200);
        }
    }
    tick();
}

// =====================================================================
// ===== NUVEM (Firebase Firestore) ====================================
// =====================================================================
// Mantém o localStorage intacto: a nuvem é uma camada extra e opcional.
// As fichas ficam em: mesas/{codigoMesa}/fichas/{fichaId}

// Verifica se o firebase-config.js foi realmente preenchido
function firebaseConfigurado() {
    return typeof firebaseConfig !== 'undefined'
        && firebaseConfig
        && typeof firebaseConfig.apiKey === 'string'
        && firebaseConfig.apiKey
        && !firebaseConfig.apiKey.startsWith('COLE_AQUI');
}

function inicializarNuvem() {
    // Recupera o código de mesa salvo
    mesaCodigo = localStorage.getItem('neo-urbano-mesa') || '';
    const inputMesa = document.getElementById('input-mesa');
    if (inputMesa) inputMesa.value = mesaCodigo;

    const avisoCfg = document.getElementById('nuvem-aviso-config');

    if (typeof firebase === 'undefined' || !firebaseConfigurado()) {
        cloudAtivo = false;
        if (avisoCfg) avisoCfg.style.display = 'flex';
        atualizarStatusNuvem();
        return;
    }

    try {
        if (!firebase.apps || !firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        db = firebase.firestore();
        cloudAtivo = true;
        if (avisoCfg) avisoCfg.style.display = 'none';
    } catch (e) {
        console.warn('Falha ao iniciar o Firebase:', e);
        cloudAtivo = false;
        if (avisoCfg) avisoCfg.style.display = 'flex';
    }
    atualizarStatusNuvem();
}

function colecaoFichasNuvem() {
    if (!cloudAtivo || !mesaCodigo) return null;
    return db.collection('mesas').doc(mesaCodigo).collection('fichas');
}

function atualizarStatusNuvem() {
    const status = document.getElementById('nuvem-status');
    if (!status) return;
    if (!cloudAtivo) status.textContent = 'offline';
    else if (!mesaCodigo) status.textContent = 'defina uma mesa';
    else status.textContent = 'mesa: ' + mesaCodigo;
}

function abrirModalNuvem() {
    const modal = document.getElementById('modal-nuvem');
    if (!modal) return;
    modal.classList.add('active');
    atualizarStatusNuvem();
    if (cloudAtivo && mesaCodigo) { escutarFichasNuvem(); escutarCompartilhadas(); }
}

function definirMesa() {
    const input = document.getElementById('input-mesa');
    mesaCodigo = (input ? input.value : '').trim();
    localStorage.setItem('neo-urbano-mesa', mesaCodigo);
    atualizarStatusNuvem();
    if (cloudAtivo && mesaCodigo) {
        escutarFichasNuvem();
        escutarCompartilhadas();
    } else {
        const lista = document.getElementById('nuvem-lista');
        if (lista) lista.innerHTML = '<div class="nuvem-vazio">Defina um código de mesa para ver as fichas.</div>';
    }
}

// Monta o registro que vai para a nuvem
function montarRegistroNuvem(pers, id) {
    return {
        id: id,
        personagem: JSON.parse(JSON.stringify(pers)),
        nome: pers.nome || 'Sem nome',
        classe: (pers.classe && pers.classe.nome) ? pers.classe.nome : '',
        nivel: pers.nivel || 1,
        atualizadoEm: Date.now()
    };
}

function salvarFichaNuvem(silencioso) {
    if (!cloudAtivo) { if (!silencioso) alert('A nuvem não está configurada (veja firebase-config.js).'); return; }
    if (!mesaCodigo) { if (!silencioso) alert('Defina um código de mesa primeiro.'); return; }
    if (!personagem.nome) { if (!silencioso) alert('A ficha precisa de um nome para ir à nuvem.'); return; }

    const id = fichaAtualId || ('ficha_' + Date.now());
    fichaAtualId = id;

    // Grava a ficha completa (medidores sempre íntegros), com merge para NÃO apagar
    // campos que só o mestre escreve no topo do doc (ex.: notasMestre).
    colecaoFichasNuvem().doc(id).set(montarRegistroNuvem(personagem, id), { merge: true })
        .then(() => {
            assinarFichaAoVivo(id); // passa a receber ao vivo o que o mestre mudar
            if (!silencioso) alert('Ficha salva na nuvem!');
        })
        .catch(e => { if (!silencioso) alert('Erro ao salvar na nuvem: ' + e.message); });
}

// Envio automático com debounce (chamado a cada alteração salva)
function agendarPushNuvem() {
    if (!cloudAtivo || !mesaCodigo || !personagem.nome || !fichaAtualId) return;
    clearTimeout(cloudPushTimer);
    cloudPushTimer = setTimeout(() => salvarFichaNuvem(true), 1500);
}

// Migração: envia todas as fichas locais para a mesa atual (sem apagar nada local)
function enviarLocaisParaNuvem() {
    if (!cloudAtivo) { alert('A nuvem não está configurada (veja firebase-config.js).'); return; }
    if (!mesaCodigo) { alert('Defina um código de mesa primeiro.'); return; }

    const fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
    if (fichas.length === 0) { alert('Não há fichas locais para enviar.'); return; }
    if (!confirm(`Enviar ${fichas.length} ficha(s) local(is) para a mesa "${mesaCodigo}"? As fichas locais continuam intactas.`)) return;

    const col = colecaoFichasNuvem();
    Promise.all(fichas.map(f => col.doc(f.id).set(montarRegistroNuvem(f.personagem || {}, f.id))))
        .then(() => alert('Fichas locais enviadas para a nuvem!'))
        .catch(e => alert('Erro ao enviar: ' + e.message));
}

function escutarFichasNuvem() {
    const lista = document.getElementById('nuvem-lista');
    const col = colecaoFichasNuvem();

    if (!col) {
        if (lista) lista.innerHTML = '<div class="nuvem-vazio">Defina um código de mesa para ver as fichas.</div>';
        return;
    }

    if (unsubscribeNuvem) { unsubscribeNuvem(); unsubscribeNuvem = null; }
    if (lista) lista.innerHTML = '<div class="nuvem-vazio">Conectando…</div>';

    unsubscribeNuvem = col.orderBy('atualizadoEm', 'desc').onSnapshot(snap => {
        atualizarStatusNuvem();
        if (!lista) return;
        if (snap.empty) {
            lista.innerHTML = '<div class="nuvem-vazio">Nenhuma ficha nesta mesa ainda.</div>';
            return;
        }
        lista.innerHTML = '';
        snap.forEach(doc => {
            const f = doc.data();
            const div = document.createElement('div');
            div.className = 'nuvem-ficha-item';
            const ehAtual = doc.id === fichaAtualId;
            div.innerHTML = `
                <div class="nuvem-ficha-info">
                    <div class="nuvem-ficha-nome">${escaparHTML(f.nome || 'Sem nome')} ${ehAtual ? '<span class="nuvem-tag">esta ficha</span>' : ''}</div>
                    <div class="nuvem-ficha-det">${escaparHTML(f.classe || '—')} · Nível ${f.nivel || 1}</div>
                </div>
                <button class="btn-pequeno nuvem-abrir" data-id="${escaparHTML(doc.id)}"><i class="fas fa-folder-open"></i> Abrir</button>
            `;
            lista.appendChild(div);
        });
    }, err => {
        console.warn('Erro no listener da nuvem:', err);
        if (lista) lista.innerHTML = '<div class="nuvem-vazio">Erro ao ler a nuvem: ' + escaparHTML(err.message) + '</div>';
    });
}

function abrirFichaNuvem(id) {
    const col = colecaoFichasNuvem();
    if (!col) return;
    col.doc(id).get()
        .then(doc => {
            if (!doc.exists) { alert('Ficha não encontrada na nuvem.'); return; }
            const f = doc.data();
            aplicarFichaCarregada(f.personagem, id);
            assinarFichaAoVivo(id);
            // Fecha o modal da nuvem
            const modal = document.getElementById('modal-nuvem');
            if (modal) modal.classList.remove('active');
            alert(`Ficha "${personagem.nome}" aberta da nuvem. Alterações que você salvar voltam pra nuvem.`);
        })
        .catch(e => alert('Erro ao abrir da nuvem: ' + e.message));
}

// ===== SYNC AO VIVO DA PRÓPRIA FICHA (jogador vê o que o mestre muda) =====
function assinarFichaAoVivo(id) {
    if (!cloudAtivo || !mesaCodigo || !id) return;
    if (id === fichaVivaId && unsubscribeFichaViva) return; // já assinado
    if (unsubscribeFichaViva) { unsubscribeFichaViva(); unsubscribeFichaViva = null; }
    fichaVivaId = id;
    const col = colecaoFichasNuvem();
    if (!col) return;
    unsubscribeFichaViva = col.doc(id).onSnapshot(doc => {
        if (!doc.exists) return;
        if (doc.metadata && doc.metadata.hasPendingWrites) return; // mudança local, ignora
        const f = doc.data();
        if (f && f.personagem) aplicarCamposMestre(f.personagem);
    }, err => console.warn('Erro no sync ao vivo da ficha:', err));
}

// Aplica só os campos que o mestre controla (medidores, vida/energia, nível, xp)
function aplicarCamposMestre(remoto) {
    let mudou = false;
    if (remoto.medidores) {
        if (!personagem.medidores) personagem.medidores = {};
        // Sobrepõe só as chaves presentes (o mestre pode mandar update parcial)
        Object.keys(remoto.medidores).forEach(k => {
            if (Array.isArray(remoto.medidores[k])) personagem.medidores[k] = remoto.medidores[k];
        });
        // Garante que todos os 10 medidores existam como array (nunca quebra o render)
        ['ferimentos', 'estresse', 'exposicao', 'fome', 'sede', 'sono', 'higiene', 'alcool', 'cigarro', 'drogas'].forEach(k => {
            if (!Array.isArray(personagem.medidores[k])) personagem.medidores[k] = Array(6).fill(false);
        });
        mudou = true;
    }
    if (remoto.statusAtual) {
        if (!personagem.statusAtual) personagem.statusAtual = {};
        if (typeof remoto.statusAtual.vida === 'number') personagem.statusAtual.vida = remoto.statusAtual.vida;
        if (typeof remoto.statusAtual.energia === 'number') personagem.statusAtual.energia = remoto.statusAtual.energia;
        mudou = true;
    }
    if (typeof remoto.nivel === 'number') { personagem.nivel = remoto.nivel; mudou = true; }
    if (typeof remoto.xp === 'number') { personagem.xp = remoto.xp; mudou = true; }
    // Notas do mestre são secretas — não aplicamos/mostramos nada delas aqui.
    const telaFicha = document.getElementById('tela-ficha');
    if (mudou && telaFicha && telaFicha.classList.contains('ativa')) {
        renderCamposMestreUI();
    }
}

// Atualiza SÓ o que o mestre controla, sem re-renderizar a ficha inteira
// (evita apagar o que o jogador está digitando em textareas).
function renderCamposMestreUI() {
    if (!personagem.atributos) return;
    atualizarQuadradinhos();

    const vidaMax = 8 + (personagem.atributos.carne * 2);
    const energiaMax = 6 + (personagem.atributos.carne * 2);
    const vidaAtual = Math.max(0, Math.min(personagem.statusAtual.vida, vidaMax));
    const energiaAtual = Math.max(0, Math.min(personagem.statusAtual.energia, energiaMax));

    const vv = document.getElementById('vida-valor'); if (vv) vv.textContent = `${vidaAtual}/${vidaMax}`;
    const vb = document.getElementById('vida-barra'); if (vb) vb.style.width = `${(vidaAtual / vidaMax) * 100}%`;
    const ev = document.getElementById('energia-valor'); if (ev) ev.textContent = `${energiaAtual}/${energiaMax}`;
    const eb = document.getElementById('energia-barra'); if (eb) eb.style.width = `${(energiaAtual / energiaMax) * 100}%`;
    renderBarrasHud();

    const fn = document.getElementById('ficha-nivel'); if (fn) fn.textContent = personagem.nivel;
    const fx = document.getElementById('ficha-xp'); if (fx) fx.textContent = personagem.xp;
    const idn = document.getElementById('idcard-nivel'); if (idn) idn.textContent = personagem.nivel || 1;
    const idx = document.getElementById('idcard-xp'); if (idx) idx.textContent = `${personagem.xp || 0}/${personagem.xpProximoNivel || 100}`;
}

// =====================================================================
// ===== PAINEL DO MESTRE ==============================================
// =====================================================================

const medidoresMestre = [
    { k: 'ferimentos', n: 'Ferimentos' }, { k: 'estresse', n: 'Estresse' }, { k: 'exposicao', n: 'Exposição' },
    { k: 'fome', n: 'Fome' }, { k: 'sede', n: 'Sede' }, { k: 'sono', n: 'Sono' }, { k: 'higiene', n: 'Higiene' },
    { k: 'alcool', n: 'Álcool' }, { k: 'cigarro', n: 'Cigarro' }, { k: 'drogas', n: 'Drogas' }
];

function abrirModalMestre() {
    const modal = document.getElementById('modal-mestre');
    if (!modal) return;
    const aviso = document.getElementById('mestre-aviso-config');
    if (aviso) aviso.style.display = cloudAtivo ? 'none' : 'flex';
    const im = document.getElementById('mestre-mesa'); if (im) im.value = mesaCodigo || '';
    const is = document.getElementById('mestre-senha'); if (is) is.value = '';
    modal.classList.add('active');
    setTimeout(() => { const alvo = mesaCodigo ? is : im; if (alvo) alvo.focus(); }, 60);
}

function fecharModalMestre() {
    const m = document.getElementById('modal-mestre');
    if (m) m.classList.remove('active');
}

function entrarModoMestre() {
    if (!cloudAtivo) { alert('A nuvem não está configurada — o modo mestre precisa dela.'); return; }
    const mesa = (document.getElementById('mestre-mesa')?.value || '').trim();
    const senha = (document.getElementById('mestre-senha')?.value || '');
    if (!mesa) { alert('Informe o código da mesa.'); return; }
    if (!senha) { alert('Informe a senha do mestre.'); return; }

    mesaCodigo = mesa;
    localStorage.setItem('neo-urbano-mesa', mesa);

    const btn = document.getElementById('btn-mestre-entrar');
    if (btn) { btn.disabled = true; btn.textContent = 'Verificando…'; }

    const mesaRef = db.collection('mesas').doc(mesa);
    mesaRef.get().then(snap => {
        const data = snap.exists ? snap.data() : null;
        if (!data || !data.mestrePass) {
            if (!confirm(`A mesa "${mesa}" ainda não tem mestre.\nDefinir esta senha como a senha do mestre desta mesa?`)) {
                throw { _cancel: true };
            }
            return mesaRef.set({ mestrePass: senha, criadaEm: Date.now() }, { merge: true });
        }
        if (data.mestrePass !== senha) { alert('Senha do mestre incorreta.'); throw { _cancel: true }; }
    }).then(() => {
        modoMestre = true;
        document.body.classList.add('modo-mestre');
        fecharModalMestre();
        mostrarTela('tela-mestre');
        escutarMesaMestre();
    }).catch(e => {
        if (!e || !e._cancel) alert('Erro ao entrar como mestre: ' + (e && e.message ? e.message : e));
    }).finally(() => {
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-user-shield"></i> ENTRAR'; }
    });
}

function sairModoMestre() {
    modoMestre = false;
    document.body.classList.remove('modo-mestre');
    if (unsubscribeMesaMestre) { unsubscribeMesaMestre(); unsubscribeMesaMestre = null; }
    if (unsubscribeNpcs) { unsubscribeNpcs(); unsubscribeNpcs = null; }
    if (unsubscribeCombate) { unsubscribeCombate(); unsubscribeCombate = null; }
    if (unsubscribeNotas) { unsubscribeNotas(); unsubscribeNotas = null; }
    mostrarTela('tela-intro');
}

function escutarMesaMestre() {
    const grid = document.getElementById('mestre-grid');
    const col = colecaoFichasNuvem();
    const codEl = document.getElementById('mestre-cod'); if (codEl) codEl.textContent = mesaCodigo || '—';
    if (!col) { if (grid) grid.innerHTML = '<div class="nuvem-vazio">Defina uma mesa.</div>'; return; }
    if (unsubscribeMesaMestre) { unsubscribeMesaMestre(); unsubscribeMesaMestre = null; }
    if (grid) grid.innerHTML = '<div class="nuvem-vazio">Conectando…</div>';

    // Ordem FIXA por id (ordem de criação) — as fichas não pulam de lugar ao serem editadas.
    // Atualiza só o card que mudou, na posição dele (sem reconstruir o grid, sem piscar).
    let primeiroSnap = true;
    unsubscribeMesaMestre = col.onSnapshot(snap => {
        snap.docs.forEach(d => { fichasMesaCache[d.id] = d.data(); });
        if (!grid) return;

        if (primeiroSnap) {
            primeiroSnap = false;
            const docs = snap.docs.slice().sort((a, b) => a.id.localeCompare(b.id));
            if (docs.length === 0) { grid.innerHTML = '<div class="nuvem-vazio">Nenhuma ficha nesta mesa ainda.</div>'; return; }
            grid.innerHTML = '';
            docs.forEach(d => grid.appendChild(criarCardMestre(d.id, d.data())));
            return;
        }

        const vazio = grid.querySelector('.nuvem-vazio'); if (vazio) vazio.remove();
        snap.docChanges().forEach(ch => {
            const id = ch.doc.id;
            const existente = grid.querySelector(':scope > [data-id="' + id + '"]');
            if (ch.type === 'removed') {
                if (existente) existente.remove();
                delete fichasMesaCache[id];
            } else if (ch.type === 'modified' && existente) {
                existente.replaceWith(criarCardMestre(id, ch.doc.data())); // só este card, no mesmo lugar
            } else if (!existente) {
                grid.appendChild(criarCardMestre(id, ch.doc.data())); // novo jogador entra no fim
            }
        });
        if (!grid.querySelector('.mestre-card')) grid.innerHTML = '<div class="nuvem-vazio">Nenhuma ficha nesta mesa ainda.</div>';
    }, err => { if (grid) grid.innerHTML = '<div class="nuvem-vazio">Erro: ' + escaparHTML(err.message) + '</div>'; });

    // NPCs, tracker de combate e notas (ao vivo)
    escutarNpcsMestre();
    escutarCombate();
    escutarNotas();
}

function barraMestre(label, val, max, tipo, id) {
    const pct = max > 0 ? Math.max(0, Math.min(100, (val / max) * 100)) : 0;
    const critico = pct <= 25 ? ' critico' : '';
    return `
      <div class="mestre-barra-row">
        <span class="mestre-barra-lbl">${label}</span>
        <button class="mini-btn dano" data-act="${tipo}" data-id="${id}" data-delta="-5">−5</button>
        <button class="mini-btn dano" data-act="${tipo}" data-id="${id}" data-delta="-1">−1</button>
        <div class="mestre-barra-track"><div class="mestre-barra-fill ${tipo}${critico}" style="width:${pct}%"></div><span class="mestre-barra-txt">${val}/${max}</span></div>
        <button class="mini-btn cura" data-act="${tipo}" data-id="${id}" data-delta="1">+1</button>
        <button class="mini-btn cura" data-act="${tipo}" data-id="${id}" data-delta="5">+5</button>
      </div>`;
}

function grupoCondicoesMestre(id, p) {
    const med = p.medidores || {};
    return medidoresMestre.map(m => {
        const arr = med[m.k] || [];
        let nivel = 0; arr.forEach((v, i) => { if (v) nivel = i + 1; });
        let pips = '';
        for (let i = 0; i < 6; i++) {
            pips += `<span class="cond-pip ${i < nivel ? 'on' : ''}" data-act="cond" data-id="${id}" data-med="${m.k}" data-i="${i}"></span>`;
        }
        return `<div class="cond-row"><span class="cond-lbl">${m.n}</span><span class="cond-pips">${pips}</span></div>`;
    }).join('');
}

function criarCardMestre(id, f) {
    const p = f.personagem || {};
    const carne = (p.atributos && p.atributos.carne) || 1;
    const vidaMax = 8 + carne * 2, energiaMax = 6 + carne * 2;
    const vida = (p.statusAtual && typeof p.statusAtual.vida === 'number') ? p.statusAtual.vida : vidaMax;
    const energia = (p.statusAtual && typeof p.statusAtual.energia === 'number') ? p.statusAtual.energia : energiaMax;
    const foto = p.foto || '';

    const card = document.createElement('div');
    card.className = 'mestre-card';
    card.setAttribute('data-id', id);
    card.innerHTML = `
      <div class="mestre-card-top">
        <div class="mestre-foto"${foto ? ` style="background-image:url(${foto})"` : ''}>${foto ? '' : '<i class="fas fa-user-astronaut"></i>'}</div>
        <div class="mestre-id">
          <div class="mestre-nome">${escaparHTML(f.nome || 'Sem nome')}</div>
          <div class="mestre-sub">${escaparHTML(f.classe || '—')} · Nível ${f.nivel || 1}</div>
        </div>
        <button class="btn-pequeno mestre-abrir" data-id="${id}"><i class="fas fa-pen"></i> Abrir</button>
      </div>
      <div class="mestre-vitais">
        ${barraMestre('VIDA', vida, vidaMax, 'vida', id)}
        ${barraMestre('EN', energia, energiaMax, 'energia', id)}
      </div>
      <div class="mestre-xp-row">
        <span><i class="fas fa-star"></i> XP <b>${p.xp || 0}</b>/${p.xpProximoNivel || 100}</span>
        <span class="mestre-xp-btns">
          <button class="mini-btn" data-act="xp" data-id="${id}" data-delta="5">+5</button>
          <button class="mini-btn" data-act="xp" data-id="${id}" data-delta="25">+25</button>
          <button class="mini-btn dano" data-act="xp" data-id="${id}" data-delta="-5">−5</button>
        </span>
      </div>
      <div class="mestre-cond">${grupoCondicoesMestre(id, p)}</div>
      <div class="mestre-card-footer">
        <button class="btn-pequeno mestre-enviar" data-id="${id}"><i class="fas fa-share-nodes"></i> Enviar cópia</button>
        <button class="btn-pequeno mestre-excluir" data-id="${id}"><i class="fas fa-trash"></i> Excluir</button>
      </div>
    `;
    return card;
}

function mestreAlterarStatus(id, tipo, delta) {
    const f = fichasMesaCache[id]; if (!f) return;
    const p = f.personagem || {};
    const carne = (p.atributos && p.atributos.carne) || 1;
    const max = (tipo === 'vida' ? 8 : 6) + carne * 2;
    const atual = (p.statusAtual && typeof p.statusAtual[tipo] === 'number') ? p.statusAtual[tipo] : max;
    const novo = Math.max(0, Math.min(max, atual + delta));
    colecaoFichasNuvem().doc(id).update({ ['personagem.statusAtual.' + tipo]: novo, atualizadoEm: Date.now() })
        .catch(e => alert('Erro: ' + e.message));
}

function mestreAlterarXP(id, delta) {
    const f = fichasMesaCache[id]; if (!f) return;
    const p = f.personagem || {};
    const novo = Math.max(0, (p.xp || 0) + delta);
    colecaoFichasNuvem().doc(id).update({ 'personagem.xp': novo, atualizadoEm: Date.now() })
        .catch(e => alert('Erro: ' + e.message));
}

function mestreCondicao(id, med, i) {
    const f = fichasMesaCache[id]; if (!f) return;
    const p = f.personagem || {};
    const arr = (p.medidores && Array.isArray(p.medidores[med])) ? p.medidores[med].slice() : Array(6).fill(false);
    let maxTrue = -1; arr.forEach((v, idx) => { if (v) maxTrue = idx; });
    const nivel = (arr[i] && i === maxTrue) ? i : i + 1;
    const novo = []; for (let k = 0; k < 6; k++) novo[k] = k < nivel;
    colecaoFichasNuvem().doc(id).update({ ['personagem.medidores.' + med]: novo, atualizadoEm: Date.now() })
        .catch(e => alert('Erro: ' + e.message));
}

function mestreAbrirFicha(id) {
    const col = colecaoFichasNuvem(); if (!col) return;
    col.doc(id).get().then(doc => {
        if (!doc.exists) { alert('Ficha não encontrada na nuvem.'); return; }
        aplicarFichaCarregada(doc.data().personagem, id);
        assinarFichaAoVivo(id);
    }).catch(e => alert('Erro ao abrir: ' + e.message));
}

function mestreExcluirFicha(id) {
    const f = fichasMesaCache[id];
    if (!confirm(`Excluir a ficha "${f ? (f.nome || 'sem nome') : ''}" da mesa?\nIsso remove ela da nuvem (o jogador ainda mantém a cópia local dele).`)) return;
    colecaoFichasNuvem().doc(id).delete().catch(e => alert('Erro ao excluir: ' + e.message));
}

// ===== ENVIAR CÓPIA DE FICHA PRA MESA (compartilhar) =====
function colecaoCompartilhadas() {
    if (!cloudAtivo || !mesaCodigo) return null;
    return db.collection('mesas').doc(mesaCodigo).collection('compartilhadas');
}

function enviarCopiaMesa(pers, nome, classe, de) {
    const col = colecaoCompartilhadas();
    if (!col) { alert('Defina o código da mesa primeiro (☁ NUVEM).'); return; }
    if (!pers) { alert('Ficha inválida.'); return; }
    const id = 'comp_' + Date.now();
    col.doc(id).set({
        id,
        personagem: JSON.parse(JSON.stringify(pers)),
        nome: nome || 'Sem nome',
        classe: classe || '',
        de: de || '',
        criadoEm: Date.now()
    }).then(() => alert('Cópia enviada pra mesa! Os jogadores pegam em ☁ NUVEM → "Fichas compartilhadas".'))
      .catch(e => alert('Erro ao enviar: ' + e.message));
}

function mestreEnviarCopia(id) {
    const f = fichasMesaCache[id]; if (!f) return;
    if (!confirm(`Enviar uma cópia de "${f.nome || 'ficha'}" pra mesa? Qualquer jogador vai poder pegar.`)) return;
    enviarCopiaMesa(f.personagem, f.nome, f.classe, 'mestre');
}

function compartilharMinhaFicha() {
    if (!personagem.nome) { alert('Dê um nome à ficha primeiro.'); return; }
    if (!colecaoCompartilhadas()) { alert('Defina o código da mesa em ☁ NUVEM primeiro.'); return; }
    if (!confirm('Enviar uma cópia da sua ficha pra mesa? Outros jogadores vão poder pegar.')) return;
    enviarCopiaMesa(personagem, personagem.nome, personagem.classe ? personagem.classe.nome : '', personagem.nome);
}

function escutarCompartilhadas() {
    const lista = document.getElementById('nuvem-compartilhadas');
    if (!lista) return;
    const col = colecaoCompartilhadas();
    if (!col) { lista.innerHTML = '<div class="nuvem-vazio">Defina uma mesa para ver as fichas compartilhadas.</div>'; return; }
    if (unsubscribeCompartilhadas) { unsubscribeCompartilhadas(); unsubscribeCompartilhadas = null; }
    unsubscribeCompartilhadas = col.orderBy('criadoEm', 'desc').onSnapshot(snap => {
        if (snap.empty) { lista.innerHTML = '<div class="nuvem-vazio">Nenhuma ficha compartilhada ainda.</div>'; return; }
        lista.innerHTML = '';
        snap.forEach(doc => {
            const c = doc.data();
            const div = document.createElement('div');
            div.className = 'nuvem-ficha-item';
            div.innerHTML = `
              <div class="nuvem-ficha-info">
                <div class="nuvem-ficha-nome">${escaparHTML(c.nome || 'Sem nome')}</div>
                <div class="nuvem-ficha-det">${escaparHTML(c.classe || '—')}${c.de ? (' · de ' + escaparHTML(c.de)) : ''}</div>
              </div>
              <div class="nuvem-item-acoes">
                <button class="btn-pequeno comp-pegar" data-id="${doc.id}"><i class="fas fa-download"></i> Pegar</button>
                ${modoMestre ? `<button class="btn-pequeno comp-remover" data-id="${doc.id}" title="Remover"><i class="fas fa-trash"></i></button>` : ''}
              </div>
            `;
            lista.appendChild(div);
        });
    }, err => { lista.innerHTML = '<div class="nuvem-vazio">Erro: ' + escaparHTML(err.message) + '</div>'; });
}

function pegarCompartilhada(id) {
    const col = colecaoCompartilhadas(); if (!col) return;
    col.doc(id).get().then(doc => {
        if (!doc.exists) { alert('Ficha não encontrada.'); return; }
        const c = doc.data();
        const novoId = 'ficha_' + Date.now();
        fichaAtualId = novoId;
        aplicarFichaCarregada(c.personagem, novoId); // vira uma cópia sua
        salvarFichaNuvem(true);                        // salva como a sua ficha na mesa
        const modal = document.getElementById('modal-nuvem'); if (modal) modal.classList.remove('active');
        alert(`Você pegou uma cópia de "${c.nome || 'ficha'}". Agora é a sua ficha!`);
    }).catch(e => alert('Erro ao pegar: ' + e.message));
}

function removerCompartilhada(id) {
    if (!confirm('Remover esta ficha compartilhada da mesa?')) return;
    colecaoCompartilhadas().doc(id).delete().catch(e => alert('Erro: ' + e.message));
}

// ----- Painel de NOTAS do mestre (várias notas, cada uma com título) -----
let unsubscribeNotas = null;
let notasCache = {};
let notaEditId = null;

function colecaoNotas() {
    if (!cloudAtivo || !mesaCodigo) return null;
    return db.collection('mesas').doc(mesaCodigo).collection('notas');
}

function escutarNotas() {
    const grid = document.getElementById('mestre-notas-grid');
    const col = colecaoNotas();
    if (!col) return;
    if (unsubscribeNotas) { unsubscribeNotas(); unsubscribeNotas = null; }
    unsubscribeNotas = col.orderBy('criadoEm', 'desc').onSnapshot(snap => {
        notasCache = {};
        if (!grid) return;
        if (snap.empty) { grid.innerHTML = '<div class="nuvem-vazio">Nenhuma nota ainda. Use "+ Nota".</div>'; return; }
        grid.innerHTML = '';
        snap.forEach(doc => { notasCache[doc.id] = doc.data(); grid.appendChild(criarCardNota(doc.id, doc.data())); });
    }, err => { if (grid) grid.innerHTML = '<div class="nuvem-vazio">Erro: ' + escaparHTML(err.message) + '</div>'; });
}

function criarCardNota(id, n) {
    const div = document.createElement('div');
    div.className = 'nota-card';
    div.setAttribute('data-id', id);
    div.innerHTML = `
      <div class="nota-card-head">
        <div class="nota-titulo"><i class="fas fa-thumbtack"></i> ${escaparHTML(n.titulo || 'Sem título')}</div>
        <div class="nota-acoes">
          <button class="btn-pequeno nota-editar" data-id="${id}" title="Editar"><i class="fas fa-pen"></i></button>
          <button class="btn-pequeno nota-remover" data-id="${id}" title="Remover"><i class="fas fa-trash"></i></button>
        </div>
      </div>
      <div class="nota-texto">${escaparHTML(n.texto || '')}</div>
    `;
    return div;
}

function abrirModalNota(id) {
    if (!colecaoNotas()) { alert('Defina a mesa primeiro.'); return; }
    notaEditId = id || null;
    const modal = document.getElementById('modal-nota'); if (!modal) return;
    const n = id ? (notasCache[id] || {}) : {};
    document.getElementById('nota-titulo-input').value = n.titulo || '';
    document.getElementById('nota-texto-input').value = n.texto || '';
    const tit = document.getElementById('modal-nota-titulo'); if (tit) tit.textContent = id ? 'EDITAR NOTA' : 'NOVA NOTA';
    modal.classList.add('active');
    setTimeout(() => document.getElementById('nota-titulo-input').focus(), 60);
}

function salvarNota() {
    const col = colecaoNotas(); if (!col) { alert('Defina a mesa primeiro.'); return; }
    const titulo = (document.getElementById('nota-titulo-input').value || '').trim();
    const texto = (document.getElementById('nota-texto-input').value || '').trim();
    if (!titulo && !texto) { alert('Escreva um título ou um texto.'); return; }

    if (notaEditId) {
        col.doc(notaEditId).set({ titulo, texto, atualizadoEm: Date.now() }, { merge: true })
            .catch(e => alert('Erro: ' + e.message));
    } else {
        const id = 'nota_' + Date.now();
        col.doc(id).set({ id, titulo, texto, criadoEm: Date.now(), atualizadoEm: Date.now() })
            .catch(e => alert('Erro: ' + e.message));
    }
    document.getElementById('modal-nota').classList.remove('active');
}

function removerNota(id) {
    const n = notasCache[id];
    if (!confirm(`Remover a nota "${n ? (n.titulo || 'sem título') : ''}"?`)) return;
    colecaoNotas().doc(id).delete().catch(e => alert('Erro: ' + e.message));
}

// ===== NPCs / INIMIGOS =====
function colecaoNpcs() {
    if (!cloudAtivo || !mesaCodigo) return null;
    return db.collection('mesas').doc(mesaCodigo).collection('npcs');
}

function escutarNpcsMestre() {
    const grid = document.getElementById('mestre-npcs');
    const col = colecaoNpcs();
    if (!col) return;
    if (unsubscribeNpcs) { unsubscribeNpcs(); unsubscribeNpcs = null; }
    unsubscribeNpcs = col.orderBy('criadoEm', 'asc').onSnapshot(snap => {
        npcsCache = {};
        if (!grid) return;
        if (snap.empty) { grid.innerHTML = '<div class="nuvem-vazio">Nenhum NPC/inimigo ainda. Use "+ NPC".</div>'; return; }
        grid.innerHTML = '';
        snap.forEach(doc => { npcsCache[doc.id] = doc.data(); grid.appendChild(criarCardNpc(doc.id, doc.data())); });
    }, err => { if (grid) grid.innerHTML = '<div class="nuvem-vazio">Erro: ' + escaparHTML(err.message) + '</div>'; });
}

function criarCardNpc(id, n) {
    const hpMax = n.hpMax || 10;
    const hp = typeof n.hp === 'number' ? n.hp : hpMax;
    const pct = hpMax > 0 ? Math.max(0, Math.min(100, (hp / hpMax) * 100)) : 0;
    const critico = pct <= 25 ? ' critico' : '';
    const card = document.createElement('div');
    card.className = 'mestre-card npc-card';
    card.innerHTML = `
      <div class="mestre-card-top">
        <div class="npc-icone"><i class="fas fa-skull"></i></div>
        <div class="mestre-id">
          <div class="mestre-nome">${escaparHTML(n.nome || 'NPC')}</div>
          <div class="mestre-sub">Inimigo / NPC</div>
        </div>
        <button class="btn-pequeno npc-editar" data-id="${id}" title="Editar"><i class="fas fa-pen"></i></button>
        <button class="btn-pequeno npc-remover" data-id="${id}" title="Remover"><i class="fas fa-trash"></i></button>
      </div>
      <div class="mestre-vitais">
        <div class="mestre-barra-row">
          <span class="mestre-barra-lbl">VIDA</span>
          <button class="mini-btn dano" data-npcact="hp" data-id="${id}" data-delta="-5">−5</button>
          <button class="mini-btn dano" data-npcact="hp" data-id="${id}" data-delta="-1">−1</button>
          <div class="mestre-barra-track"><div class="mestre-barra-fill vida${critico}" style="width:${pct}%"></div><span class="mestre-barra-txt">${hp}/${hpMax}</span></div>
          <button class="mini-btn cura" data-npcact="hp" data-id="${id}" data-delta="1">+1</button>
          <button class="mini-btn cura" data-npcact="hp" data-id="${id}" data-delta="5">+5</button>
        </div>
      </div>
      ${n.nota ? `<div class="npc-nota">${escaparHTML(n.nota)}</div>` : ''}
      <div class="mestre-card-footer">
        <button class="btn-pequeno npc-combate" data-id="${id}"><i class="fas fa-khanda"></i> + Combate</button>
      </div>
    `;
    return card;
}

function abrirModalNpc(id) {
    if (!colecaoNpcs()) { alert('Defina a mesa primeiro.'); return; }
    npcEditId = id || null;
    const modal = document.getElementById('modal-npc'); if (!modal) return;
    const n = id ? (npcsCache[id] || {}) : {};
    document.getElementById('npc-nome').value = n.nome || '';
    document.getElementById('npc-hp').value = (typeof n.hpMax === 'number' ? n.hpMax : 10);
    document.getElementById('npc-nota').value = n.nota || '';
    const tit = document.getElementById('modal-npc-titulo'); if (tit) tit.textContent = id ? 'EDITAR NPC' : 'NOVO NPC';
    modal.classList.add('active');
    setTimeout(() => document.getElementById('npc-nome').focus(), 60);
}

function salvarNpc() {
    const col = colecaoNpcs(); if (!col) { alert('Defina a mesa primeiro.'); return; }
    const nome = (document.getElementById('npc-nome').value || '').trim();
    const hpMax = Math.max(1, parseInt(document.getElementById('npc-hp').value, 10) || 10);
    const nota = (document.getElementById('npc-nota').value || '').trim();
    if (!nome) { alert('Dê um nome ao NPC.'); return; }

    if (npcEditId) {
        col.doc(npcEditId).set({ nome, hpMax, nota, atualizadoEm: Date.now() }, { merge: true })
            .catch(e => alert('Erro: ' + e.message));
    } else {
        const id = 'npc_' + Date.now();
        col.doc(id).set({ id, nome, hpMax, hp: hpMax, nota, criadoEm: Date.now(), atualizadoEm: Date.now() })
            .catch(e => alert('Erro: ' + e.message));
    }
    document.getElementById('modal-npc').classList.remove('active');
}

function mestreNpcVida(id, delta) {
    const n = npcsCache[id]; if (!n) return;
    const hpMax = n.hpMax || 10;
    const hp = typeof n.hp === 'number' ? n.hp : hpMax;
    const novo = Math.max(0, Math.min(hpMax, hp + delta));
    colecaoNpcs().doc(id).update({ hp: novo, atualizadoEm: Date.now() }).catch(e => alert('Erro: ' + e.message));
}

function removerNpc(id) {
    const n = npcsCache[id];
    if (!confirm(`Remover NPC "${n ? n.nome : ''}"?`)) return;
    colecaoNpcs().doc(id).delete().catch(e => alert('Erro: ' + e.message));
}

// ===== TRACKER DE COMBATE / INICIATIVA =====
function refMesa() {
    if (!cloudAtivo || !mesaCodigo) return null;
    return db.collection('mesas').doc(mesaCodigo);
}

function escutarCombate() {
    const ref = refMesa();
    if (!ref) return;
    if (unsubscribeCombate) { unsubscribeCombate(); unsubscribeCombate = null; }
    unsubscribeCombate = ref.onSnapshot(doc => {
        const data = doc.exists ? doc.data() : {};
        renderCombate(data.combate || { rodada: 1, turno: 0, lista: [] });
    }, err => {});
}

function salvarCombate(combate) {
    const ref = refMesa(); if (!ref) return;
    ref.set({ combate }, { merge: true }).catch(e => alert('Erro no combate: ' + e.message));
}

// devolve o combate atual (do cache do último snapshot, guardado em window)
function combateAtual() {
    return window.__combate || { rodada: 1, turno: 0, lista: [] };
}

function renderCombate(combate) {
    window.__combate = combate;
    const rodEl = document.getElementById('combate-rodada'); if (rodEl) rodEl.textContent = combate.rodada || 1;
    const lista = document.getElementById('combate-lista');
    if (!lista) return;
    if (!combate.lista || combate.lista.length === 0) {
        lista.innerHTML = '<div class="nuvem-vazio">Sem combatentes. Use "+ Jogadores" ou "+ Combate" num NPC.</div>';
        return;
    }
    lista.innerHTML = '';
    combate.lista.forEach((c, idx) => {
        const row = document.createElement('div');
        row.className = 'combate-row' + (idx === (combate.turno || 0) ? ' atual' : '') + (c.agiu ? ' agiu' : '');
        row.innerHTML = `
          <span class="combate-ini">${c.ini}</span>
          <button class="mini-btn" data-cbt="ini" data-cid="${c.cid}" data-delta="1">▲</button>
          <button class="mini-btn" data-cbt="ini" data-cid="${c.cid}" data-delta="-1">▼</button>
          <i class="fas ${c.tipo === 'npc' ? 'fa-skull' : 'fa-user'} combate-tipo"></i>
          <span class="combate-nome">${escaparHTML(c.nome)}</span>
          <button class="mini-btn" data-cbt="agiu" data-cid="${c.cid}" title="Marcar que agiu">${c.agiu ? '✓' : '○'}</button>
          <button class="mini-btn dano" data-cbt="rem" data-cid="${c.cid}" title="Tirar">✕</button>
        `;
        lista.appendChild(row);
    });
}

function combateAdicionarJogadores() {
    const combate = JSON.parse(JSON.stringify(combateAtual()));
    const existentes = new Set(combate.lista.map(c => c.cid));
    Object.keys(fichasMesaCache).forEach(id => {
        if (existentes.has(id)) return;
        const f = fichasMesaCache[id];
        combate.lista.push({ cid: id, nome: f.nome || 'Jogador', ini: 0, tipo: 'jogador', agiu: false });
    });
    ordenarCombate(combate);
    salvarCombate(combate);
}

function combateAdicionarNpc(npcId) {
    const n = npcsCache[npcId]; if (!n) return;
    const combate = JSON.parse(JSON.stringify(combateAtual()));
    if (combate.lista.some(c => c.cid === npcId)) return;
    combate.lista.push({ cid: npcId, nome: n.nome || 'NPC', ini: 0, tipo: 'npc', agiu: false });
    ordenarCombate(combate);
    salvarCombate(combate);
}

function ordenarCombate(combate) {
    combate.lista.sort((a, b) => (b.ini - a.ini));
}

function combateIni(cid, delta) {
    const combate = JSON.parse(JSON.stringify(combateAtual()));
    const c = combate.lista.find(x => x.cid === cid); if (!c) return;
    c.ini = (c.ini || 0) + delta;
    ordenarCombate(combate);
    salvarCombate(combate);
}

function combateAgiu(cid) {
    const combate = JSON.parse(JSON.stringify(combateAtual()));
    const c = combate.lista.find(x => x.cid === cid); if (!c) return;
    c.agiu = !c.agiu;
    salvarCombate(combate);
}

function combateRemover(cid) {
    const combate = JSON.parse(JSON.stringify(combateAtual()));
    combate.lista = combate.lista.filter(x => x.cid !== cid);
    if (combate.turno >= combate.lista.length) combate.turno = 0;
    salvarCombate(combate);
}

function combateProximo() {
    const combate = JSON.parse(JSON.stringify(combateAtual()));
    if (!combate.lista.length) return;
    // marca o atual como "agiu"
    if (combate.lista[combate.turno]) combate.lista[combate.turno].agiu = true;
    combate.turno = (combate.turno || 0) + 1;
    if (combate.turno >= combate.lista.length) {
        combate.turno = 0;
        combate.rodada = (combate.rodada || 1) + 1;
        combate.lista.forEach(c => c.agiu = false);
    }
    salvarCombate(combate);
}

function combateNovaRodada() {
    const combate = JSON.parse(JSON.stringify(combateAtual()));
    combate.rodada = (combate.rodada || 1) + 1;
    combate.turno = 0;
    combate.lista.forEach(c => c.agiu = false);
    salvarCombate(combate);
}

function combateLimpar() {
    if (!confirm('Limpar o combate (tira todos e zera a rodada)?')) return;
    salvarCombate({ rodada: 1, turno: 0, lista: [] });
}