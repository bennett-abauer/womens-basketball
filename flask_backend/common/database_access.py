import json
import psycopg2 as pg2
from psycopg2.extras import RealDictCursor
from common import sql_formatting

def all_recruit_info():
    CONN = pg2.connect(database="basketball-recruitment", user="postgres", password=9206)
    CUR = CONN.cursor(cursor_factory=RealDictCursor)

    query_sql = f'''SELECT {sql_formatting.all_info()}
                    FROM recruits AS r
                    INNER JOIN
                    positions AS p
                    ON r.position_id = p.position_id
                    INNER JOIN
                    levels as l
                    ON r.level_id = l.level_id
                    INNER JOIN
                    status AS st
                    ON r.current_status = st.status_id
                    INNER JOIN
                    schools AS s
                    ON r.school_id = s.school_id
                    ORDER BY recruit_id;
                    '''
    CUR.execute(query_sql)
    results = CUR.fetchall()
    CONN.close()

    return json.dumps(results)

def school_info():
    CONN = pg2.connect(database="basketball-recruitment", user="postgres", password=9206)
    CUR = CONN.cursor(cursor_factory=RealDictCursor)

    query_sql = f'''SELECT {sql_formatting.school_info()}
                    FROM schools AS s'''
    CUR.execute(query_sql)
    results = CUR.fetchall()
    CONN.close()

    return json.dumps(results)

def new_recruit(recruit):
    CONN = pg2.connect(database="basketball-recruitment", user="postgres", password=9206)
    CUR = CONN.cursor(cursor_factory=RealDictCursor)

    recruit_key_list = []
    recruit_value_list = []
    for key in recruit.keys():
        recruit_key_list.append(key)
        recruit_key_list.append(", ")
        if key == "first_name" or key == "last_name" or key == "address" or key == "phone_number" or key == "email":
            recruit_value_list.append("'" + recruit[key] + "'")
            recruit_value_list.append(", ")
        else:
            recruit_value_list.append(recruit[key])
            recruit_value_list.append(", ")

    recruit_key_list.pop()
    recruit_value_list.pop()

    sql_columns_string = "".join(recruit_key_list)
    sql_values_string = "".join(recruit_value_list)

    query_sql = f'''INSERT INTO recruits ({sql_columns_string}) VALUES ({sql_values_string});'''
    print(query_sql)
    
    CUR.execute(query_sql)
    CONN.commit()
    CONN.close()

def update_recruit(recruit):
    CONN = pg2.connect(database="basketball-recruitment", user="postgres", password=9206)
    CUR = CONN.cursor(cursor_factory=RealDictCursor)

    primary_key = []
    recruit_list = []
    for key in recruit.keys():
        if len(recruit[key]) > 0:
            if key == "recruit_id":
                primary_key.append(key + " = " + recruit[key])
            else:
                recruit_list.append(key + " = " + recruit[key])
                recruit_list.append(", ")

    recruit_list.pop()
    
    query_string = "".join(recruit_list)
    where_clause = "".join(primary_key)

    query_sql = f'''UPDATE recruits SET {query_string} WHERE {where_clause};'''
    
    CUR.execute(query_sql)
    CONN.commit()
    CONN.close()

def delete_recruit(recruit):
    CONN = pg2.connect(database="basketball-recruitment", user="postgres", password=9206)
    CUR = CONN.cursor(cursor_factory=RealDictCursor)

    primary_key = []
    for key in recruit.keys():
        if recruit[key] != "0":
            primary_key.append(key + " = " + recruit[key])
    query_string = "".join(primary_key)
    
    query_sql = f'''DELETE FROM recruits WHERE {query_string};'''

    CUR.execute(query_sql)
    CONN.commit()
    CONN.close()