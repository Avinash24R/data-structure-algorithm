def two_pointer_template(input):
    # Initialize pointers
    i = 0
    j = len(input) - 1
    result = None

    # Iterate while pointers do not cross
    while i < j:
        # Process the elements at both pointers
        print(i, j)
        # Adjust the pointers based on specific conditions
        # i += 1 or j -= 1

        # Break or continue based on a condition if required
        # like => if input[i] + input[j] == target: break
    # Return the final result or process output
    return result