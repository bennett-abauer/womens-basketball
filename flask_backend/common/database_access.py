import json
import psycopg2 as pg2
from psycopg2.extras import RealDictCursor
from common import sql_formatting

CONN = pg2.connect(database="basketball-recruitment", user="postgres", password=9206)
CUR = CONN.cursor(cursor_factory=RealDictCursor)

def all_recruit_info():
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
                    ON r.current_status = st.status_id;
                    '''
    CUR.execute(query_sql)
    results = CUR.fetchall()

    return json.dumps(results)