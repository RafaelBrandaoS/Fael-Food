from mysql.connector import connect

def criar_conexao():
    return connect(host='localhost', user='root', password='', database='produtoDelivery', port='3306')


def fexar_conexão(con):
    return con.close()
