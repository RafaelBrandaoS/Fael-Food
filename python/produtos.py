from python.conexao import criar_conexao, fexar_conexão

def lista_produtos():
    con = criar_conexao()
    cursor = con.cursor()
    sql = "select * from produtos order by nome"
    cursor.execute(sql)
    produtos = cursor.fetchall()
    cursor.close()
    fexar_conexão(con)
    return produtos

def atualiza_disponivel(nome_produto):
    con = criar_conexao()
    cursor = con.cursor()
    sql = f"update produtos set estoque = 'disponivel' where nome = '{nome_produto}'"
    cursor.execute(sql)
    con.commit()
    fexar_conexão(con)


def atualiza_indisponivel(nome_produto):
    con = criar_conexao()
    cursor = con.cursor()
    sql = f"update produtos set estoque = 'indisponivel' where nome = '{nome_produto}'"
    cursor.execute(sql)
    con.commit()
    fexar_conexão(con)