const shapers = [
    {
      nome: "Guga Arruda",
      slug: "shaperx",
      modelos: [
        {
          nome: "Modelo A",
          slug: "modelo-a",
          construcoes: [
            {
              tipo: "Full Carbon",
              slug: "full-carbon",
              prancha: {
                tamanho: "5'10\"",
                largura: "19 1/4\"",
                espessura: "2 3/8\"",
                volume: "28.5L",
                descricao: "Prancha leve e responsiva para ondas rápidas.",
                imagem: "/imagens/pranchas/full-carbon-modelo-a.jpg"
              }
            },
            {
              tipo: "Madeira",
              slug: "madeira",
              prancha: {
                tamanho: "5'11\"",
                largura: "19 3/8\"",
                espessura: "2 1/2\"",
                volume: "29L",
                descricao: "Acabamento elegante com madeira no deck.",
                imagem: "/imagens/pranchas/madeira-modelo-a.jpg"
              }
            }
          ]
        },
        {
          nome: "Modelo B",
          slug: "modelo-b",
          construcoes: [
            {
              tipo: "Carbono com madeira",
              slug: "carbono-madeira",
              prancha: {
                tamanho: "6'0\"",
                largura: "19 1/2\"",
                espessura: "2 5/8\"",
                volume: "30L",
                descricao: "Combinação de performance e estética única.",
                imagem: "/imagens/pranchas/carbono-madeira-modelo-b.jpg"
              }
            }
          ]
        }
      ]
    },
    {
      nome: "ShaperY",
      slug: "shapery",
      modelos: [
        {
          nome: "Modelo Z",
          slug: "modelo-z",
          construcoes: [
            {
              tipo: "Wood Classic",
              slug: "wood-classic",
              prancha: {
                tamanho: "6'2\"",
                largura: "20\"",
                espessura: "2 3/4\"",
                volume: "33L",
                descricao: "Uma prancha clássica feita 100% de madeira nobre.",
                imagem: "/imagens/pranchas/wood-classic-modelo-z.jpg"
              }
            }
          ]
        }
      ]
    }
  ];
  
  export default shapers;
  