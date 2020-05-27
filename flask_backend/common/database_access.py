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

    print(query_sql)
    
    CUR.execute(query_sql)
    CONN.commit()
    CONN.close()