# This file will take input and decide what variation of the model will run

<<<<<<< HEAD
=======
# bifurcation options: gender, sex, chronic disease
# age   | total | male | female
# 0-18  | 3552  | 3698 | 3399
# 19-64 |

# chronic disease yes = 8800 annual spending

#TODO add logic to the model

def cost_model(age, gender, chronic):
    cost = 0

    if chronic:
        if gender:
            if age < 18:
                cost = 3698
    else:
        if gender:
            if age < 18:
                cost = 3698

    return cost

#TODO figure out way to take an optional array of arguments
#TODO healthplan1 = {deductible, outofpocket, copay, premium, drugs}
def cost_comparison(cost, healthPlans[]):
    return healthPlanSelection


if __name__ == '__main__':
    





>>>>>>> cda94db804572260053d3a87e688b47d9b7a9f71
