@route('/prediction/<query_string&&>')
def prediction(): 
	loaded_model=pickle.load('model.h5')
	query_string.split('&&')
	# input_array=transform query_string
	output=loaded_model.predict(input_array)
