#include <bits/stdc++.h>
#include <cmath>
using namespace std;

vector<vector<string>> getCSVData(const string& filename);

vector<vector<string>> trainData, testData;
void train_test_split(vector<vector<string>> data);

double entropy(vector<double> probabilities);



decisionTreeNode dtree(vector<vector<string>> data, decisionTreeNode * root);

struct decisionTreeNode{
    string label;

    bool isNumeric; // to identify whether the field is numeric or categorical 
    string threshold; // this is the condition if numerical (age > 50) and if categorical (gender == "male")

    bool isLeafNode; // to keep track of leaf nodes (if the tree becomes very larg)


    decisionTreeNode *left;
    decisionTreeNode *right;

};

int main()
{
    string file_path = "water_quality_preprocessedData.csv";
    vector<vector<string>> data = getCSVData(file_path);


    train_test_split(data);// train data -> trainData and test data -> testData

    decisionTreeNode * root;

    return 0;
}

vector<vector<string>> getCSVData(const string& filename) 
{
    ifstream file(filename);
    vector<vector<string>> data;
    string line;

    if (!file.is_open()) {
        cerr << "Error: Could not open the file: " << filename << endl;
        return data;
    }

    while (getline(file, line)) {
        stringstream ss(line);
        string cell;
        vector<string> row;

        while (getline(ss, cell, ',')) {
            row.push_back(cell);
        }

        data.push_back(row);
    }

    file.close();
    /*
    this is used to print the data 

    for (const auto& row : csvData) {
        for (const auto& cell : row) {
            cout << cell << " ";
        }
        cout << endl;
    }
    */
    return data;
}


void train_test_split(vector<vector<string>> data)
{
    int dataLength = data.size();

    int test_size = static_cast<int>(dataLength * 0.2); // type casting into int so that the size is not float or double

    //we can use following line when we want to generate random seed(random rows) each time we run 
    //unsigned seed = chrono::system_clock::now().time_since_epoch().count();


    // but in reality we want to same random seed(random rows) so we use 42 
    unsigned seed = 42;
    shuffle(data.begin(), data.end(), default_random_engine(seed)); // simple shuffles the dataset 


    for(int i = 0; i < dataLength; i++)
    {
        if(i < test_size)
        {
            testData.push_back(data[i]);
        }
        else{
            trainData.push_back(data[i]);
        }
    }
}


double entropy(vector<double> probabilities)
{
    double entropy = 0.0;

    for(double p:probabilities)
    {
        if(p > 0.0)
        {
            entropy -= p * log2(p);
        }
    }
    return entropy;
}

decisionTreeNode dtree(vector<vector<string>> data, decisionTreeNode *root)
{

}