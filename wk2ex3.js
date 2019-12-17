//input nama secara bebas dan manual
var nama1 = 'arya'
//pilih peran : ksatria, tabib, atau penyihir
var peran1 = 'tabib'

if (nama1 === '')
    console.log('Nama harus diisi manual!')
else 
    if (peran1 === '')
    console.log('Halo '+(nama1)+', pilih peranmu untuk memulai game!')
    else
    console.log('Selamat datang di Dunia Proxytia,'+(nama1))
        if (peran1 == 'ksatria')
        console.log(`Halo ${peran1} ${nama1}, kamu dapat menyerang dengan senjatamu!`)
        else if (peran1 == 'tabib')
        console.log(`Halo ${peran1} ${nama1}, kamu akan membantu temanmu yang terluka.`)
        else if (peran1 == 'penyihir')
        console.log(`Halo ${peran1} ${nama1}, ciptakan keajaiban yang membantu kemenanganmu!`)
        else 
        console.log(`Peran ${peran1} tidak berlaku di game ini`)