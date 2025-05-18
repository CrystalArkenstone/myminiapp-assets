from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def page1():
    return render_template('index.html')  # первая страница

@app.route('/page2')
def page2():
    return render_template('page2.html')  # вторая страница

@app.route('/page3')
def page3():
    return render_template('page3.html')  # третья страница

@app.route('/page4')
def page4():
    return render_template('page4.html')  # четвертая страница

if __name__ == '__main__':
    app.run(debug=True)