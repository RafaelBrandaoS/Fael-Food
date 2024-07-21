from flask import Flask, url_for, render_template, request, redirect, flash
from python.produtos import lista_produtos, atualiza_disponivel,atualiza_indisponivel
import os
from dotenv import load_dotenv

load_dotenv()
NOME = os.getenv('LOG_NOME')
SENHA = os.getenv('LOG_SENHA')

logado = False

app = Flask(__name__)
app.config['SECRET_KEY'] = 'RAFAELKEY'

@app.route('/')
def home():
    " Rota principal "
    global logado
    logado = False
    produtos = lista_produtos()
    return render_template('index.html', produtos=produtos)


@app.route('/login/')
def render_form():
    " renderisa o fomulario de login "
    global logado
    logado = False
    return render_template('admin_login.html')


@app.route('/login/validar/', methods=['POST'])
def validar():
    " validar nome e senha "
    global logado
    nome = request.form.get('nome')
    senha = request.form.get('senha')
    
    if nome == NOME and senha == SENHA:
        logado = True
        return redirect('/admin/')
    else:
        flash('ERRO! nome ou senha inválida')
        return redirect('/login/')


@app.route('/admin/')
def admin():
    global logado
    if logado:
        produtos = lista_produtos()
        
        return render_template('admin.html', produtos=produtos)
    else:
        return redirect('/login/')


@app.route('/admin/<nomeProduto>/disponivel/')
def disponivel(nomeProduto):
    " produto disponivel "
    atualiza_disponivel(nomeProduto)
    return redirect('/admin/')


@app.route('/admin/<nomeProduto>/indisponivel/')
def indisponivel(nomeProduto):
    " produto indisponivel "
    atualiza_indisponivel(nomeProduto)
    return redirect('/admin/')




if __name__ == '__main__':
    app.run(debug=True)
