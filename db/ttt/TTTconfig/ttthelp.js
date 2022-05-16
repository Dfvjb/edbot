const ttthelp = (prefix) => {
    return `
「 ❌JOGO DA VELHA⭕ 」

◪ APENAS PARA GRUPOS

◪ INICIAR
  │
  ├─ ❏ Para iniciar digite:
  │     └「 ${prefix}ttt [ DIFICULDADE ] 」
  └─ ❏ Apenas uma pessoa por vez

◪ DIFICULDADE
  │
  ├─ ❏ easy : totalmente aleatório
  │     (Só azarado pra perder nessa)
  ├─ ❏ normal : 66% de chance 
  │     de bloqueio e vitória
  ├─ ❏ hard : 100% de chance 
  │     de bloqueio e vitória 
  └─ ❏ impossible : Só Kuuhaku
           pra vencer isso

◪ TEMPORIZADOR
  │
  ├─ ❏ Uma nova partida só poderá
  │     ser iniciada após um intervalo
  │     de 4 minutos apartir do início
  │     da partida anterior
  │
  └─ ❏ A partida terminará 
           automaticamente após 4 minutos

◪ COMANDOS
  │
  ├─ ❏ Para marcar digite:
  │     └「 ${prefix}coord [ COORDENADA ] 」
  │
  └─ ❏ Exemplo:
	        └「   ${prefix}coord a1 
	               ----------------------
	               🌀1️⃣2️⃣3️⃣
	               🅰️❌🔲🔲
	               🅱️🔲🔲🔲
	               ©️🔲🔲🔲 」

◪ SEU STATUS
  │
  └─ ❏ Para ver seu status digite:
          └「 ${prefix}tttme 」

◪ RECOMPENSAS
  │
  ├─ ❏ EASY
  │     ├ Vitória : +「 200 / 600 」+ DINHEIRO
  │     └ Derrota : -「 200 / 200 」- DINHEIRO
  │
  ├─ ❏ NORMAL
  │     ├ Vitória : +「 300 / 600 」+ DINHEIRO
  │     └ Derrota : -「 300 / 300 」 - DINHEIRO
  │
  ├─ ❏ HARD
  │     ├ Vitória : +「 400 / 800 」+ DINHEIRO
  │     └ Derrota : -「 400 / 400 」- DINHEIRO
  │
  ├─ ❏ IMPOSSIBLE
  │     ├ Vitória : +「 10000 / 100000 」+ DINHEIRO
  │     └ Derrota : -「 0 / 0 」- XP
  │
  ├─ ❏ EMPATE
  │     └「 0 / 0 」
  │ 
  └─ ❏ PARTIDA NÃO FINALIZADA
          └ -「 75 / 150 」
`
}

exports.ttthelp = ttthelp