import { StyleSheet, Text, View, Image, FlatList,  } from 'react-native';

function Card(props) {
  return(
    <View style={styles.card}>
        <Image style={{ resizeMode:'stretch', width: '100%', height:100, flex:2,  }} source={{uri:props.livro.capa}} />
        <Text style={{color: 'white', fontSize:18, textAlign:'center'  }}  > {props.livro.titulo}</Text>
        <Text style={{color:'white', fontSize:20, textAlign:'center' }} > R$ {props.livro.preco} </Text>
    </View>   
    )
}

export default function App(){
    const livros =[
        {
          capa: 'https://m.media-amazon.com/images/I/71-ghLb8qML.jpg',
          titulo: 'Sapiens',
          preco: '50,00'
        },
        {
          capa: 'https://img.elo7.com.br/product/main/3121D5E/placa-decorativa-mdf-frases-a-sutil-arte-de-ligar-o-foda-se-e-so-rodopiar-em-busca-do-que-e-belo-e-v.jpg',
          titulo: 'A sutil arte de ligar o f*da-se',
          preco: '99,90'
        },
        {
          capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1c/Casamento_Blindado.jpg/230px-Casamento_Blindado.jpg',
          titulo: 'Casamento blindado',
          preco: '24,50'
        },
        {
          capa: 'https://m.media-amazon.com/images/I/510e3m4siSL._SX324_BO1,204,203,200_.jpg',
          titulo: 'Lições de vencedor',
          preco: '32,00'
        },

        {
          capa: 'https://m.media-amazon.com/images/I/516bUuP3oiL._SX322_BO1,204,203,200_.jpg',
          titulo: 'Pedagogia do oprimido',
          preco: '40,00'
        },
      {
        capa: 'https://m.media-amazon.com/images/I/51UzT2tGKjL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        titulo: 'Malala',
        preco: '32,00'
      },
      
    ],


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', color:'white', margin:10, }} >TOP LIVROS</Text>
      <View style={styles.conteudo}>
          {livros.map(livro => <Card livro={livro}/>)}
      </View>
    </View>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop:20,
      marginTop: 40,
      padding: 20,
      backgroundColor: '#2F66FD',
    },
    conteudo:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#8FB8DE',

      alignItems:'center',
      justifyContent: "center",
      width:'100%',
      
    },
    card:{
      width:'90%',
      height:400,
      backgroundColor:'#3C787E',
      borderRadius:10,
      margin:10
    },
    livro:{
      fontSize:18,
      textAlign: 'center',
    }
    
  
   
    
    

  });
