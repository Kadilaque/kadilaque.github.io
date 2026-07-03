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
            atributoChave: "Malandragem"
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
            atributoChave: "Lábia"
        },
        { 
            nome: "Médico de Rua", 
            icone: "fa-user-md",
            descricao: "Cura com o que tem. Ético ou não, o importante é funcionar.",
            atributoChave: "Recurso"
        },
        { 
            nome: "Hacker", 
            icone: "fa-code",
            descricao: "A realidade é apenas outro sistema para ser invadido.",
            atributoChave: "Recurso"
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
            atributoChave: "Recurso"
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
const habilidadesArvore = {
    carne: [
        { 
            id: "corpo_cascudo",
            nome: "Corpo Cascudo", 
            descricao: "Vida máxima +2.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        },
        { 
            id: "aguentar_tranco",
            nome: "Aguentar o Tranco", 
            descricao: "Ignora a penalidade do primeiro Ferimento Leve.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        },
        { 
            id: "pulmao_forte",
            nome: "Pulmão Forte", 
            descricao: "Energia máxima +1.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        }
    ],
    malandragem: [
        { 
            id: "passos_leves",
            nome: "Passos Leves", 
            descricao: "Correr e fugir custam −1 Energia.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        },
        { 
            id: "reflexos_treinados",
            nome: "Reflexos Treinados", 
            descricao: "+1 em Esquiva.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        }
    ],
    foco: [
        { 
            id: "mente_clara",
            nome: "Mente Clara", 
            descricao: "Ignora a primeira penalidade de Estresse.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        },
        { 
            id: "atencao_total",
            nome: "Atenção Total", 
            descricao: "+1 em Investigação e Análise.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        }
    ],
    labia: [
        { 
            id: "voz_peso",
            nome: "Voz de Peso", 
            descricao: "+1 em Persuasão ou Intimidação.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        },
        { 
            id: "respeito_rua",
            nome: "Respeito de Rua", 
            descricao: "NPCs comuns evitam confronto direto.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        }
    ],
    recurso: [
        { 
            id: "interface_natural",
            nome: "Interface Natural", 
            descricao: "Você interage com sistemas e dispositivos sem penalidade, mesmo sob pressão.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        },
        { 
            id: "leitura_sistema",
            nome: "Leitura de Sistema", 
            descricao: "+1 em ações de Hacking, Eletrônica ou Análise digital.",
            custo: "🟢",
            tipo: "passiva",
            cor: "verde"
        }
    ]
};

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
        malandragem: 1,
        foco: 1,
        recurso: 1,
        labia: 1
    },
    periciasEscolhidas: [],
    habilidadesAdquiridas: [],
    pontosAtributos: 6,
    detalhes: {
        idade: 25,
        altura: 175,
        aparencia: "",
        historia: ""
    },
    hacks: "",
    inventario: "Colete leve\nComunicador\nKit básico de ferramentas",
    itensPersonalizados: [],
    implantes: "",
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
        }
        
        // Atualiza ficha se for a tela da ficha
        if (idTela === 'tela-ficha') {
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
        const atributos = [
            { nome: "Carne", key: "carne", icone: "fa-fist-raised", desc: "Força física, resistência, saúde. Define Vida e Energia." },
            { nome: "Malandragem", key: "malandragem", icone: "fa-user-ninja", desc: "Agilidade, furtividade, destreza manual." },
            { nome: "Foco", key: "foco", icone: "fa-eye", desc: "Percepção, atenção, precisão." },
            { nome: "Recurso", key: "recurso", icone: "fa-brain", desc: "Conhecimento, lógica, memória, habilidades técnicas." },
            { nome: "Lábia", key: "labia", icone: "fa-comments", desc: "Persuasão, manipulação, carisma, influência social." }
        ];
        
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

function toggleQuadradinho(medidor, index, elemento) {
    // Alterna estado do quadradinho
    personagem.medidores[medidor][index] = !personagem.medidores[medidor][index];
    
    if (personagem.medidores[medidor][index]) {
        elemento.classList.add('preenchido');
        if (medidor === 'ferimentos') {
            elemento.classList.add('dano');
        }
    } else {
        elemento.classList.remove('preenchido');
        if (medidor === 'ferimentos') {
            elemento.classList.remove('dano');
        }
    }
    
    // Salva automaticamente
    salvarAutomaticamente();
}

function inicializarHabilidades() {
    const tabsContainer = document.getElementById('habilidades-tabs');
    const conteudoContainer = document.getElementById('habilidades-conteudo');
    
    if (!tabsContainer || !conteudoContainer) return;
    
    // Cria tabs
    const atributos = ['carne', 'malandragem', 'foco', 'labia', 'recurso'];
    const nomes = { carne: 'Carne', malandragem: 'Malandragem', foco: 'Foco', labia: 'Lábia', recurso: 'Recurso' };
    
    atributos.forEach((atrib, index) => {
        // Tab
        const tab = document.createElement('div');
        tab.className = `habilidade-tab ${index === 0 ? 'ativa' : ''}`;
        tab.setAttribute('data-atributo', atrib);
        tab.innerHTML = `<i class="fas fa-${atrib === 'carne' ? 'fist-raised' : atrib === 'malandragem' ? 'user-ninja' : atrib === 'foco' ? 'eye' : atrib === 'labia' ? 'comments' : 'brain'}"></i> ${nomes[atrib]}`;
        tab.addEventListener('click', () => mostrarHabilidadeCategoria(atrib));
        tabsContainer.appendChild(tab);
        
        // Conteúdo da categoria
        const categoria = document.createElement('div');
        categoria.className = `habilidade-categoria ${index === 0 ? 'ativa' : ''}`;
        categoria.id = `habilidades-${atrib}`;
        
        habilidadesArvore[atrib].forEach(habilidade => {
            const div = document.createElement('div');
            div.className = 'habilidade-item';
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

function mostrarHabilidadeCategoria(atributo) {
    // Ativa a tab
    document.querySelectorAll('.habilidade-tab').forEach(tab => {
        tab.classList.remove('ativa');
    });
    const tabAtiva = document.querySelector(`.habilidade-tab[data-atributo="${atributo}"]`);
    if (tabAtiva) tabAtiva.classList.add('ativa');
    
    // Mostra o conteúdo
    document.querySelectorAll('.habilidade-categoria').forEach(cat => {
        cat.classList.remove('ativa');
    });
    const categoriaAtiva = document.getElementById(`habilidades-${atributo}`);
    if (categoriaAtiva) categoriaAtiva.classList.add('ativa');
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
            elemento.classList.add('adquirida');
            personagem.pontosAtributoDisponiveis--;
            atualizarFicha();
            atualizarHabilidadesResumo();
            salvarAutomaticamente();
        } else {
            alert("Você não tem pontos de habilidade disponíveis!");
        }
    } else {
        personagem.habilidadesAdquiridas.splice(index, 1);
        elemento.classList.remove('adquirida');
        personagem.pontosAtributoDisponiveis++;
        atualizarFicha();
        atualizarHabilidadesResumo();
        salvarAutomaticamente();
    }
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
    
    const btnRemoverItem = document.getElementById('btn-remover-item');
    if (btnRemoverItem) {
        btnRemoverItem.addEventListener('click', mostrarModalRemoverItem);
    }
    
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
    
    // Identificação
    document.getElementById('ficha-nome').textContent = personagem.nome || "---";
    document.getElementById('ficha-classe').textContent = personagem.classe ? personagem.classe.nome : "---";
    document.getElementById('ficha-origem').textContent = personagem.origem || "---";
    document.getElementById('ficha-nivel').textContent = personagem.nivel;
    document.getElementById('ficha-xp').textContent = personagem.xp;
    
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
        
        const atributos = [
            { nome: "Carne", key: "carne", icone: "fa-fist-raised" },
            { nome: "Malandragem", key: "malandragem", icone: "fa-user-ninja" },
            { nome: "Foco", key: "foco", icone: "fa-eye" },
            { nome: "Recurso", key: "recurso", icone: "fa-brain" },
            { nome: "Lábia", key: "labia", icone: "fa-comments" }
        ];
        
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
            const quadrados = container.querySelectorAll('.quadrado');
            quadrados.forEach((quadrado, index) => {
                if (personagem.medidores[medidor][index]) {
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
        return;
    }
    
    itensPersonalizados.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'inventario-item personalizado';
        div.setAttribute('data-index', index);
        div.innerHTML = `<i class="fas fa-box"></i> ${item}`;
        
        // Adiciona evento para remover
        div.addEventListener('click', function(e) {
            if (e.ctrlKey) { // Ctrl+clique para remover
                if (confirm(`Remover item "${item}"?`)) {
                    itensPersonalizados.splice(index, 1);
                    personagem.itensPersonalizados = itensPersonalizados;
                    atualizarInventarioPersonalizado();
                    salvarAutomaticamente();
                }
            }
        });
        
        container.appendChild(div);
    });
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

function mostrarModalRemoverItem() {
    if (itensPersonalizados.length === 0) {
        alert("Não há itens personalizados para remover!");
        return;
    }
    
    let mensagem = "Itens personalizados:\n\n";
    itensPersonalizados.forEach((item, index) => {
        mensagem += `${index + 1}. ${item}\n`;
    });
    
    const escolha = prompt(`${mensagem}\nDigite o número do item a ser removido (1-${itensPersonalizados.length}):`);
    
    if (escolha) {
        const index = parseInt(escolha) - 1;
        if (index >= 0 && index < itensPersonalizados.length) {
            if (confirm(`Remover item "${itensPersonalizados[index]}"?`)) {
                itensPersonalizados.splice(index, 1);
                personagem.itensPersonalizados = itensPersonalizados;
                atualizarInventarioPersonalizado();
                salvarAutomaticamente();
            }
        } else {
            alert("Número inválido!");
        }
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
}

function carregarFichasSalvas() {
    const fichas = JSON.parse(localStorage.getItem('neo-urbano-fichas') || '[]');
    return fichas;
}

function carregarFicha(idFicha) {
    const fichas = carregarFichasSalvas();
    const ficha = fichas.find(f => f.id === idFicha);
    
    if (!ficha) {
        alert("Ficha não encontrada!");
        return false;
    }
    
    // Carrega dados da ficha
    fichaAtualId = ficha.id;
    Object.assign(personagem, ficha.personagem);
    
    // Garante que arrays existam
    if (!personagem.periciasEscolhidas) personagem.periciasEscolhidas = [];
    if (!personagem.habilidadesAdquiridas) personagem.habilidadesAdquiridas = [];
    if (!personagem.itensPersonalizados) personagem.itensPersonalizados = [];
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
    
    // Atualiza itens personalizados
    itensPersonalizados = personagem.itensPersonalizados || [];
    
    // Mostra tela da ficha
    mostrarTela('tela-ficha');
    
    // Atualiza todos os dados
    atualizarFicha();
    
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
            malandragem: 1,
            foco: 1,
            recurso: 1,
            labia: 1
        },
        periciasEscolhidas: [],
        habilidadesAdquiridas: [],
        pontosAtributos: 6,
        detalhes: {
            idade: 25,
            altura: 175,
            aparencia: "",
            historia: ""
        },
        hacks: "",
        inventario: "Colete leve\nComunicador\nKit básico de ferramentas",
        itensPersonalizados: [],
        implantes: "",
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
    
    console.log("Personagem resetado!");
}