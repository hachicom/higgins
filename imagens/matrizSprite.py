#Largura da Figura
width=320
#Altura da Figura
height=400
#Largura da matriz
largura=4
#Altura da matriz
altura=3
#Matriz vazia
matriz=[]
for j in range(altura):
  for i in range(largura):
    matriz.append([i*width,j*height])
print(matriz)