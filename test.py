    # # app.py
    # from flask import Flask, request, jsonify
    # from flask_cors import CORS
    # import os
    # from dwave.system import DWaveSampler, EmbeddingComposite
    # from pyqubo import Array, Constraint

    # # Set your API token as an environment variable
    # os.environ['DWAVE_API_TOKEN'] = 'DEV-ec5e9026d8696e03f45f1bf87c5a3f7fb15b4ec7'

    # app = Flask(__name__)
    # CORS(app)  # Enable CORS

    # # Define winning combinations
    # WINNING_COMBINATIONS = [
    #     (0, 1, 2), (3, 4, 5), (6, 7, 8),  # Rows
    #     (0, 3, 6), (1, 4, 7), (2, 5, 8),  # Columns
    #     (0, 4, 8), (2, 4, 6)  # Diagonals
    # ]

    # def check_game_status(board):
    #     for condition in WINNING_COMBINATIONS:
    #         a, b, c = condition
    #         if board[a] == board[b] == board[c] and board[a] != ' ':
    #             return board[a]  # Return 'X' or 'O'
    #     if ' ' not in board:
    #         return 'Draw'
    #     return None  # Game is still ongoing

    # def create_qubo_for_single_move(board):
    #     # Define binary variables
    #     x = Array.create('x', shape=9, vartype='BINARY')

    #     # Hamiltonian terms
    #     H = 0

    #     # Penalties and rewards
    #     basic_move_reward = 1
    #     follow_winning_combo_reward = 3
    #     winning_move_reward = 14
    #     block_opponent_reward = 8

    #     # Encourage selecting an empty cell (basic move)
    #     for i in range(9):
    #         if board[i] == ' ':
    #             H -= basic_move_reward * x[i]

    #     # Penalize selecting multiple cells
    #     for i in range(9):
    #         if board[i] == ' ':
    #             for j in range(i + 1, 9):
    #                 if board[j] == ' ':
    #                     H += 100 * x[i] * x[j]  # High penalty to ensure only one move is made

    #     # Attack strategies
    #     for combo in WINNING_COMBINATIONS:
    #         empty_cells = [i for i in combo if board[i] == ' ']
    #         o_cells = [i for i in combo if board[i] == 'O']
            
    #         # Level 1: Follow a winning combination
    #         if len(empty_cells) == 2 and len(o_cells) == 1:
    #             for cell in empty_cells:
    #                 H -= follow_winning_combo_reward * x[cell]
            
    #         # Level 2: Go for the winning move
    #         elif len(empty_cells) == 1 and len(o_cells) == 2:
    #             H -= winning_move_reward * x[empty_cells[0]]

    #     # Defense strategy
    #     for combo in WINNING_COMBINATIONS:
    #         empty_cells = [i for i in combo if board[i] == ' ']
    #         x_cells = [i for i in combo if board[i] == 'X']
            
    #         # Block opponent's winning move
    #         if len(empty_cells) == 1 and len(x_cells) == 2:
    #             H -= block_opponent_reward * x[empty_cells[0]]

    #     model = H.compile()
    #     qubo, offset = model.to_qubo()

    #     return qubo

    # def solve_qubo(qubo):
    #     sampler = EmbeddingComposite(DWaveSampler())
    #     response = sampler.sample_qubo(qubo, num_reads=100)

    #     solution = response.first.sample
    #     solution_index = [int(k[2:-1]) for k, v in solution.items() if v == 1]
    #     return solution_index[0] if solution_index else None

    # def computer_move(board):
    #     qubo = create_qubo_for_single_move(board)
    #     best_move = solve_qubo(qubo)
    #     if best_move is not None:
    #         board[best_move] = 'O'
    #     else:
    #         # Fallback to first empty cell if no move is found
    #         for i, cell in enumerate(board):
    #             if cell == ' ':
    #                 board[i] = 'O'
    #                 break

    # @app.route('/move', methods=['POST'])
    # def move():
    #     data = request.json
    #     board = data['board']

    #     # Check if the game is already over
    #     status = check_game_status(board)
    #     if status:
    #         return jsonify({'board': board, 'status': f'Player {status} wins!' if status != 'Draw' else 'Game ended in a draw!'})

    #     # Computer's move
    #     computer_move(board)

    #     status = check_game_status(board)
    #     return jsonify({'board': board, 'status': f'Player {status} wins!' if status else ''})

    # @app.route('/restart', methods=['POST'])
    # def restart():
    #     # Logic to reset the game state if needed
    #     return jsonify({'status': 'Game reset'})

    # if __name__ == '__main__':
    #     app.run(port=5000, debug=True)


# # app.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import os
# import json
# from dwave.system import DWaveSampler, EmbeddingComposite

# # Set your API token as an environment variable
# os.environ['DWAVE_API_TOKEN'] = 'DEV-ec5e9026d8696e03f45f1bf87c5a3f7fb15b4ec7'

# app = Flask(__name__)
# CORS(app)  # Enable CORS

# # Global variable to store the received code
# received_code = None
# global_namespace = {}

# # Directory to store workspace state
# WORKSPACE_STATE_FOLDER = r'C:\QuantumBlockly\tic-tac-toe\src\Workspace State'
# WORKSPACE_STATE_FILE = os.path.join(WORKSPACE_STATE_FOLDER, 'workspace_state.json')

# # Ensure the Workspace State folder exists
# os.makedirs(WORKSPACE_STATE_FOLDER, exist_ok=True)

# def execute_received_code(function_name, *args):
#     global received_code, global_namespace
#     if received_code:
#         try:
#             exec(received_code, global_namespace)
#             return global_namespace[function_name](*args)
#         except Exception as e:
#             print(f"Error executing {function_name}: {str(e)}")
#             return None
#     return None

# def solve_qubo(qubo):
#     sampler = EmbeddingComposite(DWaveSampler())
#     response = sampler.sample_qubo(qubo, num_reads=100)

#     solution = response.first.sample
#     solution_index = [int(k[2:-1]) for k, v in solution.items() if v == 1]
#     return solution_index[0] if solution_index else None

# def computer_move(board):
#     qubo = execute_received_code('create_qubo_for_single_move', board)
#     if qubo is None:
#         return  # If QUBO creation fails, don't make a move

#     best_move = solve_qubo(qubo)
#     if best_move is not None:
#         board[best_move] = 'O'
#     else:
#         # Fallback to first empty cell if no move is found
#         for i, cell in enumerate(board):
#             if cell == ' ':
#                 board[i] = 'O'
#                 break

# @app.route('/move', methods=['POST'])
# def move():
#     data = request.json
#     board = data['board']

#     # Check if the game is already over
#     status = execute_received_code('check_game_status', board)
#     if status:
#         return jsonify({'board': board, 'status': f'Player {status} wins!' if status != 'Draw' else 'Game ended in a draw!'})

#     # Computer's move
#     computer_move(board)

#     status = execute_received_code('check_game_status', board)
#     return jsonify({'board': board, 'status': f'Player {status} wins!' if status else ''})

# @app.route('/restart', methods=['POST'])
# def restart():
#     global received_code, global_namespace
#     received_code = None  # Reset the received code
#     global_namespace = {}  # Reset the global namespace
#     return jsonify({'status': 'Game reset'})

# @app.route('/receive_code', methods=['POST'])
# def receive_code():
#     global received_code, global_namespace
#     data = request.json
#     received_code = data['code']
    
#     try:
#         # Test execute the received code
#         exec(received_code, global_namespace)
#         required_functions = ['create_qubo_for_single_move', 'check_game_status']
#         for func in required_functions:
#             if func not in global_namespace:
#                 raise Exception(f"The code must define a '{func}' function")
        
#         return jsonify({
#             'result': 'Code received and verified successfully',
#             'error': None
#         })
#     except Exception as e:
#         received_code = None  # Reset if there's an error
#         global_namespace = {}  # Reset the global namespace
#         return jsonify({
#             'result': None,
#             'error': str(e)
#         })

# @app.route('/save_workspace', methods=['POST'])
# def save_workspace():
#     try:
#         state = request.json['state']
#         with open(WORKSPACE_STATE_FILE, 'w') as f:
#             json.dump(state, f)
#         return jsonify({'message': 'Workspace state saved successfully'})
#     except Exception as e:
#         return jsonify({'error': f'Failed to save workspace state: {str(e)}'}), 500

# @app.route('/load_workspace', methods=['GET'])
# def load_workspace():
#     try:
#         if os.path.exists(WORKSPACE_STATE_FILE):
#             with open(WORKSPACE_STATE_FILE, 'r') as f:
#                 state = json.load(f)
#             return jsonify({'state': state})
#         else:
#             return jsonify({'error': 'No saved workspace state found'}), 404
#     except Exception as e:
#         return jsonify({'error': f'Failed to load workspace state: {str(e)}'}), 500

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)
    
    
    
# TO DO: remove the check game status for the blockly and move it to frontend
# TO DO: have a serialization to save the main function/structure. Students should only need to put codes/blocks inside the function
# TO DO: have variables for pyqubo and normal (different color) check out my list in scratch
# TO DO: make the workspace bigger
# TO DO: make the user interprete the output of pyqubo (put this onto blockly into the main structure)
# TO DO: instead of sending straight to backend, send it to the frontend through javascript then will transform this into string of
# expressions then will send to backend as strings. 

# create variable, list, expression, 


# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json
from dwave.system import DWaveSampler, EmbeddingComposite

# Set your API token as an environment variable
os.environ['DWAVE_API_TOKEN'] = 'DEV-ec5e9026d8696e03f45f1bf87c5a3f7fb15b4ec7'

app = Flask(__name__)
CORS(app)  # Enable CORS

# Global variable to store the received code
received_code = None
global_namespace = {}

# Directory to store workspace state
WORKSPACE_STATE_FOLDER = r'C:\QuantumBlockly\tic-tac-toe\src\Workspace State'
WORKSPACE_STATE_FILE = os.path.join(WORKSPACE_STATE_FOLDER, 'workspace_state.json')

# Ensure the Workspace State folder exists
os.makedirs(WORKSPACE_STATE_FOLDER, exist_ok=True)

# Define winning combinations
WINNING_COMBINATIONS = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),  # Rows
    (0, 3, 6), (1, 4, 7), (2, 5, 8),  # Columns
    (0, 4, 8), (2, 4, 6)  # Diagonals
]

def check_game_status(board):
    for condition in WINNING_COMBINATIONS:
        a, b, c = condition
        if board[a] == board[b] == board[c] and board[a] != ' ':
            return board[a]  # Return 'X' or 'O'
    if ' ' not in board:
        return 'Draw'
    return None  # Game is still ongoing

def execute_received_code(function_name, *args):
    global received_code, global_namespace
    if received_code:
        try:
            exec(received_code, global_namespace)
            return global_namespace[function_name](*args)
        except Exception as e:
            print(f"Error executing {function_name}: {str(e)}")
            return None
    return None

def solve_qubo(qubo):
    sampler = EmbeddingComposite(DWaveSampler())
    response = sampler.sample_qubo(qubo, num_reads=100)

    solution = response.first.sample
    solution_index = [int(k[2:-1]) for k, v in solution.items() if v == 1]
    return solution_index[0] if solution_index else None

def computer_move(board):
    qubo = execute_received_code('create_qubo_for_single_move', board)
    if qubo is None:
        return  # If QUBO creation fails, don't make a move

    best_move = solve_qubo(qubo)
    if best_move is not None:
        board[best_move] = 'O'
    else:
        # Fallback to first empty cell if no move is found
        for i, cell in enumerate(board):
            if cell == ' ':
                board[i] = 'O'
                break

@app.route('/move', methods=['POST'])
def move():
    data = request.json
    board = data['board']

    # Check if the game is already over
    status = check_game_status(board)
    if status:
        return jsonify({'board': board, 'status': f'Player {status} wins!' if status != 'Draw' else 'Game ended in a draw!'})

    # Computer's move
    computer_move(board)

    status = check_game_status(board)
    return jsonify({'board': board, 'status': f'Player {status} wins!' if status else ''})

@app.route('/restart', methods=['POST'])
def restart():
    global received_code, global_namespace
    received_code = None  # Reset the received code
    global_namespace = {}  # Reset the global namespace
    return jsonify({'status': 'Game reset'})

@app.route('/receive_code', methods=['POST'])
def receive_code():
    global received_code, global_namespace
    data = request.json
    received_code = data['code']
    
    try:
        # Test execute the received code
        exec(received_code, global_namespace)
        if 'create_qubo_for_single_move' not in global_namespace:
            raise Exception("The code must define a 'create_qubo_for_single_move' function")
        
        return jsonify({
            'result': 'Code received and verified successfully',
            'error': None
        })
    except Exception as e:
        received_code = None  # Reset if there's an error
        global_namespace = {}  # Reset the global namespace
        return jsonify({
            'result': None,
            'error': str(e)
        })

@app.route('/save_workspace', methods=['POST'])
def save_workspace():
    try:
        state = request.json['state']
        with open(WORKSPACE_STATE_FILE, 'w') as f:
            json.dump(state, f)
        return jsonify({'message': 'Workspace state saved successfully'})
    except Exception as e:
        return jsonify({'error': f'Failed to save workspace state: {str(e)}'}), 500

@app.route('/load_workspace', methods=['GET'])
def load_workspace():
    try:
        if os.path.exists(WORKSPACE_STATE_FILE):
            with open(WORKSPACE_STATE_FILE, 'r') as f:
                state = json.load(f)
            return jsonify({'state': state})
        else:
            return jsonify({'error': 'No saved workspace state found'}), 404
    except Exception as e:
        return jsonify({'error': f'Failed to load workspace state: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
    
    
    
    
#add difficulty by make sure the blockly code from user need to be good enough to pass another computer move (javascript)
#write a game engine in javascript player vs player, player vs cpu (javascipt with different level)